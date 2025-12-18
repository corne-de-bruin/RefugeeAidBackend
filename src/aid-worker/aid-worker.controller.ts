import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger';
import { AidWorkerService } from './aid-worker.service';
import { AidWorker } from './aid-worker.entity';
import { CreateAidWorkerDto, UpdateAidWorkerDto } from './dto/aid-worker.dto';

@ApiTags('aidworker')
@Controller('api/aidworker')
export class AidWorkerController {
  constructor(private readonly aidWorkerService: AidWorkerService) {}

  @Get()
  @ApiOperation({ summary: 'Get all aid workers', description: 'Retrieve all aid workers with optional filtering by city or type of assistance' })
  @ApiQuery({ name: 'city', required: false, description: 'Filter by city name' })
  @ApiQuery({ name: 'type', required: false, description: 'Filter by type of assistance' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved aid workers', type: [AidWorker] })
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
  @ApiOperation({ summary: 'Get aid worker by ID', description: 'Retrieve a specific aid worker by their number ID' })
  @ApiParam({ name: 'id', description: 'Aid worker number ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved aid worker', type: AidWorker })
  @ApiResponse({ status: 404, description: 'Aid worker not found' })
  async getById(@Param('id') id: string): Promise<AidWorker | null> {
    return this.aidWorkerService.getById(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create new aid worker', description: 'Add a new aid worker to the database' })
  @ApiBody({ type: CreateAidWorkerDto })
  @ApiResponse({ status: 201, description: 'Aid worker successfully created', type: AidWorker })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async create(@Body() aidWorkerData: CreateAidWorkerDto): Promise<AidWorker> {
    return this.aidWorkerService.create(aidWorkerData);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update aid worker (full)', description: 'Fully update an existing aid worker' })
  @ApiParam({ name: 'id', description: 'Aid worker number ID' })
  @ApiBody({ type: UpdateAidWorkerDto })
  @ApiResponse({ status: 200, description: 'Aid worker successfully updated', type: AidWorker })
  @ApiResponse({ status: 404, description: 'Aid worker not found' })
  async update(
    @Param('id') id: string,
    @Body() aidWorkerData: UpdateAidWorkerDto,
  ): Promise<AidWorker> {
    return this.aidWorkerService.update(parseInt(id), aidWorkerData);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update aid worker (partial)', description: 'Partially update an existing aid worker' })
  @ApiParam({ name: 'id', description: 'Aid worker number ID' })
  @ApiBody({ type: UpdateAidWorkerDto })
  @ApiResponse({ status: 200, description: 'Aid worker successfully updated', type: AidWorker })
  @ApiResponse({ status: 404, description: 'Aid worker not found' })
  async partialUpdate(
    @Param('id') id: string,
    @Body() aidWorkerData: UpdateAidWorkerDto,
  ): Promise<AidWorker> {
    return this.aidWorkerService.update(parseInt(id), aidWorkerData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete aid worker', description: 'Remove an aid worker from the database' })
  @ApiParam({ name: 'id', description: 'Aid worker number ID' })
  @ApiResponse({ status: 200, description: 'Aid worker successfully deleted' })
  @ApiResponse({ status: 404, description: 'Aid worker not found' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.aidWorkerService.delete(parseInt(id));
  }
}
