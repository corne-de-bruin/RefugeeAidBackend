import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AidWorker } from './aid-worker.entity';
import * as fs from 'fs';
import * as path from 'path';
import * as csvParser from 'csv-parser';

@Injectable()
export class DatabaseSeederService implements OnModuleInit {
  constructor(
    @InjectRepository(AidWorker)
    private aidWorkerRepository: Repository<AidWorker>,
  ) {}

  async onModuleInit() {
    await this.seedDatabase();
  }

  private async seedDatabase() {
    // Check if database already has data
    const count = await this.aidWorkerRepository.count();
    if (count > 0) {
      console.log('Database already seeded, skipping...');
      return;
    }

    console.log('Seeding database from CSV...');
    const csvFilePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'dataset',
      'Dataset.csv',
    );

    return new Promise<void>((resolve, reject) => {
      const aidWorkers: Partial<AidWorker>[] = [];

      fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (data) => {
          const aidWorker: Partial<AidWorker> = {
            nr: parseInt(data['Nr.']) || 0,
            voornaam: data['Voornaam'] || '',
            achternaam: data['Achternaam'] || '',
            geslacht: data['Geslacht'] || '',
            typeHulpverlening: data['Type hulpverlening'] || '',
            leeftijd: parseInt(data['Leeftijd']) || 0,
            woonplaats: data['Woonplaats'] || '',
            gesprokenTalen: data['Gesproken talen'] || '',
          };
          aidWorkers.push(aidWorker);
        })
        .on('end', async () => {
          try {
            await this.aidWorkerRepository.save(aidWorkers);
            console.log(`Successfully seeded ${aidWorkers.length} aid workers`);
            resolve();
          } catch (error) {
            console.error('Error seeding database:', error);
            reject(error);
          }
        })
        .on('error', (error) => {
          console.error('Error reading CSV:', error);
          reject(error);
        });
    });
  }
}
