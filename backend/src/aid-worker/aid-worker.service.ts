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
}
