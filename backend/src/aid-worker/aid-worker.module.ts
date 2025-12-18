import { Module } from '@nestjs/common';
import { AidWorkerController } from './aid-worker.controller';
import { AidWorkerService } from './aid-worker.service';

@Module({
  controllers: [AidWorkerController],
  providers: [AidWorkerService],
})
export class AidWorkerModule {}
