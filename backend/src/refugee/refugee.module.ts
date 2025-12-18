import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefugeeController } from './refugee.controller';
import { RefugeeService } from './refugee.service';
import { Refugee } from './refugee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Refugee])],
  controllers: [RefugeeController],
  providers: [RefugeeService],
})
export class RefugeeModule {}
