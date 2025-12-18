import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
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

  @Post()
  async create(@Body() aidWorkerData: Partial<AidWorker>): Promise<AidWorker> {
    return this.aidWorkerService.create(aidWorkerData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() aidWorkerData: Partial<AidWorker>,
  ): Promise<AidWorker> {
    return this.aidWorkerService.update(parseInt(id), aidWorkerData);
  }

  @Patch(':id')
  async partialUpdate(
    @Param('id') id: string,
    @Body() aidWorkerData: Partial<AidWorker>,
  ): Promise<AidWorker> {
    return this.aidWorkerService.update(parseInt(id), aidWorkerData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.aidWorkerService.delete(parseInt(id));
  }
}
