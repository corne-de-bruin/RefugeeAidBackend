import { Controller, Get, Param, Query } from '@nestjs/common';
import { DatasetService } from './dataset.service';
import { DatasetEntry } from './dataset.interface';

@Controller('api/aidworker')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  @Get()
  async getAllData(
    @Query('city') city?: string,
    @Query('type') type?: string,
  ): Promise<DatasetEntry[]> {
    if (city) {
      return this.datasetService.filterByCity(city);
    }
    if (type) {
      return this.datasetService.filterByType(type);
    }
    return this.datasetService.getAllData();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<DatasetEntry | null> {
    return this.datasetService.getById(parseInt(id));
  }
}
