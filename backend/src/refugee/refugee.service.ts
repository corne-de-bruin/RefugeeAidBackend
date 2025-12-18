import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Refugee } from './refugee.entity';

@Injectable()
export class RefugeeService {
  constructor(
    @InjectRepository(Refugee)
    private refugeeRepository: Repository<Refugee>,
  ) {}

  async findAll(): Promise<Refugee[]> {
    return this.refugeeRepository.find();
  }

  async findOne(id: number): Promise<Refugee | null> {
    return this.refugeeRepository.findOne({ where: { id } });
  }

  async create(refugeeData: Partial<Refugee>): Promise<Refugee> {
    const refugee = this.refugeeRepository.create(refugeeData);
    return this.refugeeRepository.save(refugee);
  }

  async update(id: number, refugeeData: Partial<Refugee>): Promise<Refugee> {
    const refugee = await this.refugeeRepository.findOne({ where: { id } });
    if (!refugee) {
      throw new Error(`Refugee with id ${id} not found`);
    }
    Object.assign(refugee, refugeeData);
    return this.refugeeRepository.save(refugee);
  }

  async delete(id: number): Promise<void> {
    const refugee = await this.refugeeRepository.findOne({ where: { id } });
    if (!refugee) {
      throw new Error(`Refugee with id ${id} not found`);
    }
    await this.refugeeRepository.remove(refugee);
  }

  async filterByCountry(country: string): Promise<Refugee[]> {
    return this.refugeeRepository.find({
      where: { landVanHerkomst: ILike(`%${country}%`) },
    });
  }

  async filterByCity(city: string): Promise<Refugee[]> {
    return this.refugeeRepository.find({
      where: { woonplaats: ILike(city) },
    });
  }

  async filterByStatus(status: string): Promise<Refugee[]> {
    return this.refugeeRepository.find({
      where: { statusAanvraag: ILike(`%${status}%`) },
    });
  }
}
