import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { AidWorker } from './aid-worker.entity';

@Injectable()
export class AidWorkerService {
  constructor(
    @InjectRepository(AidWorker)
    private aidWorkerRepository: Repository<AidWorker>,
  ) {}

  async getAllData(): Promise<AidWorker[]> {
    return this.aidWorkerRepository.find();
  }

  async getById(id: number): Promise<AidWorker | null> {
    return this.aidWorkerRepository.findOne({ where: { nr: id } });
  }

  async filterByCity(city: string): Promise<AidWorker[]> {
    return this.aidWorkerRepository.find({
      where: { woonplaats: ILike(city) },
    });
  }

  async filterByType(type: string): Promise<AidWorker[]> {
    return this.aidWorkerRepository.find({
      where: { typeHulpverlening: ILike(`%${type}%`) },
    });
  }

  async create(aidWorkerData: Partial<AidWorker>): Promise<AidWorker> {
    const aidWorker = this.aidWorkerRepository.create(aidWorkerData);
    return this.aidWorkerRepository.save(aidWorker);
  }

  async update(id: number, aidWorkerData: Partial<AidWorker>): Promise<AidWorker> {
    const aidWorker = await this.aidWorkerRepository.findOne({ where: { nr: id } });
    if (!aidWorker) {
      throw new Error(`AidWorker with id ${id} not found`);
    }
    Object.assign(aidWorker, aidWorkerData);
    return this.aidWorkerRepository.save(aidWorker);
  }

  async delete(id: number): Promise<void> {
    const aidWorker = await this.aidWorkerRepository.findOne({ where: { nr: id } });
    if (!aidWorker) {
      throw new Error(`AidWorker with id ${id} not found`);
    }
    await this.aidWorkerRepository.remove(aidWorker);
  }
}
