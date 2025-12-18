import { Module } from '@nestjs/common';
import { AidWorkerModule } from './aid-worker/aid-worker.module';

@Module({
  imports: [AidWorkerModule],
})
export class AppModule {}
