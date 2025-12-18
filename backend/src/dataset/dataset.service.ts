import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as csvParser from 'csv-parser';
import { DatasetEntry } from './dataset.interface';

@Injectable()
export class DatasetService {
  private readonly csvFilePath: string;

  constructor() {
    // Path to the CSV file relative to the project root
    this.csvFilePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'dataset',
      'Dataset.csv',
    );
  }

  async getAllData(): Promise<DatasetEntry[]> {
    return new Promise((resolve, reject) => {
      const results: DatasetEntry[] = [];

      fs.createReadStream(this.csvFilePath)
        .pipe(csvParser())
        .on('data', (data) => {
          // Map CSV columns to our interface
          const entry: DatasetEntry = {
            nr: parseInt(data['Nr.']) || 0,
            voornaam: data['Voornaam'] || '',
            achternaam: data['Achternaam'] || '',
            geslacht: data['Geslacht'] || '',
            typeHulpverlening: data['Type hulpverlening'] || '',
            leeftijd: parseInt(data['Leeftijd']) || 0,
            woonplaats: data['Woonplaats'] || '',
            gesprokenTalen: data['Gesproken talen'] || '',
          };
          results.push(entry);
        })
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async getById(id: number): Promise<DatasetEntry | null> {
    const allData = await this.getAllData();
    return allData.find((entry) => entry.nr === id) || null;
  }

  async filterByCity(city: string): Promise<DatasetEntry[]> {
    const allData = await this.getAllData();
    return allData.filter(
      (entry) => entry.woonplaats.toLowerCase() === city.toLowerCase(),
    );
  }

  async filterByType(type: string): Promise<DatasetEntry[]> {
    const allData = await this.getAllData();
    return allData.filter(
      (entry) =>
        entry.typeHulpverlening.toLowerCase().includes(type.toLowerCase()),
    );
  }
}
