import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AidWorkerModule } from './aid-worker/aid-worker.module';
import { AidWorker } from './aid-worker/aid-worker.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [AidWorker],
      synchronize: true,
    }),
    AidWorkerModule,
  ],
})
export class AppModule {}
