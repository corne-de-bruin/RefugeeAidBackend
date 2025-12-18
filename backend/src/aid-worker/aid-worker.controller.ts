import { Controller, Get, Param, Query } from '@nestjs/common';
import { AidWorkerService } from './aid-worker.service';
import { AidWorker } from './aid-worker.entity';

@Controller('api/aidworker')
export class AidWorkerController {
  constructor(private readonly aidWorkerService: AidWorkerService) {}

  @Get()
  async getAllData(
    @Query('city') city?: string,
    @Query('type') type?: string,
  ): Promise<AidWorker[]> {
    if (city) {
      return this.aidWorkerService.filterByCity(city);
    }
    if (type) {
      return this.aidWorkerService.filterByType(type);
    }
    return this.aidWorkerService.getAllData();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<AidWorker | null> {
    return this.aidWorkerService.getById(parseInt(id));
  }
}
