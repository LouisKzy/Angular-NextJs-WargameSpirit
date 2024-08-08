import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TableModule } from '../tables/table.module';
import { CategoryModule } from '../categorys/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation]),
    TableModule,
    CategoryModule,
  ],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}
