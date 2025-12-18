import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { RefugeeService } from './refugee.service';
import { Refugee } from './refugee.entity';

@Controller('api/refugee')
export class RefugeeController {
  constructor(private readonly refugeeService: RefugeeService) {}

  @Get()
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
  async findOne(@Param('id') id: string): Promise<Refugee | null> {
    return this.refugeeService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() refugeeData: Partial<Refugee>): Promise<Refugee> {
    return this.refugeeService.create(refugeeData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() refugeeData: Partial<Refugee>,
  ): Promise<Refugee> {
    return this.refugeeService.update(parseInt(id), refugeeData);
  }

  @Patch(':id')
  async partialUpdate(
    @Param('id') id: string,
    @Body() refugeeData: Partial<Refugee>,
  ): Promise<Refugee> {
    return this.refugeeService.update(parseInt(id), refugeeData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.refugeeService.delete(parseInt(id));
  }
}
