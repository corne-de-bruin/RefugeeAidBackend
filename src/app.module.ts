import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AidWorkerModule } from './aid-worker/aid-worker.module';
import { RefugeeModule } from './refugee/refugee.module';
import { AidWorker } from './aid-worker/aid-worker.entity';
import { Refugee } from './refugee/refugee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [AidWorker, Refugee],
      synchronize: true,
    }),
    AidWorkerModule,
    RefugeeModule,
  ],
})
export class AppModule {}
