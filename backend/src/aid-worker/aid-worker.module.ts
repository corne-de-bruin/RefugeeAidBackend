import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AidWorkerController } from './aid-worker.controller';
import { AidWorkerService } from './aid-worker.service';
import { AidWorker } from './aid-worker.entity';
import { DatabaseSeederService } from './database-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([AidWorker])],
  controllers: [AidWorkerController],
  providers: [AidWorkerService, DatabaseSeederService],
})
export class AidWorkerModule {}
