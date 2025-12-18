import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger';
import { RefugeeService } from './refugee.service';
import { Refugee } from './refugee.entity';
import { CreateRefugeeDto, UpdateRefugeeDto } from './dto/refugee.dto';

@ApiTags('refugee')
@Controller('api/refugee')
export class RefugeeController {
  constructor(private readonly refugeeService: RefugeeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all refugees', description: 'Retrieve all refugees with optional filtering by country, city, or application status' })
  @ApiQuery({ name: 'country', required: false, description: 'Filter by country of origin' })
  @ApiQuery({ name: 'city', required: false, description: 'Filter by city of residence' })
  @ApiQuery({ name: 'status', required: false, description: 'Filter by application status' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved refugees', type: [Refugee] })
  async findAll(
    @Query('country') country?: string,
    @Query('city') city?: string,
    @Query('status') status?: string,
  ): Promise<Refugee[]> {
    if (country) {
      return this.refugeeService.filterByCountry(country);
    }
    if (city) {
      return this.refugeeService.filterByCity(city);
    }
    if (status) {
      return this.refugeeService.filterByStatus(status);
    }
    return this.refugeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get refugee by ID', description: 'Retrieve a specific refugee by their ID' })
  @ApiParam({ name: 'id', description: 'Refugee ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved refugee', type: Refugee })
  @ApiResponse({ status: 404, description: 'Refugee not found' })
  async findOne(@Param('id') id: string): Promise<Refugee | null> {
    return this.refugeeService.findOne(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create new refugee', description: 'Add a new refugee to the database' })
  @ApiBody({ type: CreateRefugeeDto })
  @ApiResponse({ status: 201, description: 'Refugee successfully created', type: Refugee })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async create(@Body() refugeeData: CreateRefugeeDto): Promise<Refugee> {
    return this.refugeeService.create(refugeeData);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update refugee (full)', description: 'Fully update an existing refugee' })
  @ApiParam({ name: 'id', description: 'Refugee ID' })
  @ApiBody({ type: UpdateRefugeeDto })
  @ApiResponse({ status: 200, description: 'Refugee successfully updated', type: Refugee })
  @ApiResponse({ status: 404, description: 'Refugee not found' })
  async update(
    @Param('id') id: string,
    @Body() refugeeData: UpdateRefugeeDto,
  ): Promise<Refugee> {
    return this.refugeeService.update(parseInt(id), refugeeData);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update refugee (partial)', description: 'Partially update an existing refugee' })
  @ApiParam({ name: 'id', description: 'Refugee ID' })
  @ApiBody({ type: UpdateRefugeeDto })
  @ApiResponse({ status: 200, description: 'Refugee successfully updated', type: Refugee })
  @ApiResponse({ status: 404, description: 'Refugee not found' })
  async partialUpdate(
    @Param('id') id: string,
    @Body() refugeeData: UpdateRefugeeDto,
  ): Promise<Refugee> {
    return this.refugeeService.update(parseInt(id), refugeeData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete refugee', description: 'Remove a refugee from the database' })
  @ApiParam({ name: 'id', description: 'Refugee ID' })
  @ApiResponse({ status: 200, description: 'Refugee successfully deleted' })
  @ApiResponse({ status: 404, description: 'Refugee not found' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.refugeeService.delete(parseInt(id));
  }
}
