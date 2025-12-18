import { ApiProperty } from '@nestjs/swagger';

export class CreateAidWorkerDto {
  @ApiProperty({ example: 102, description: 'Unique number identifier for the aid worker' })
  nr: number;

  @ApiProperty({ example: 'Jan', description: 'First name of the aid worker' })
  voornaam: string;

  @ApiProperty({ example: 'Jansen', description: 'Last name of the aid worker' })
  achternaam: string;

  @ApiProperty({ example: 'Man', description: 'Gender of the aid worker', enum: ['Man', 'Vrouw'] })
  geslacht: string;

  @ApiProperty({ example: 'Psychologische hulp', description: 'Type of assistance provided' })
  typeHulpverlening: string;

  @ApiProperty({ example: 35, description: 'Age of the aid worker' })
  leeftijd: number;

  @ApiProperty({ example: 'Amsterdam', description: 'City where the aid worker is located' })
  woonplaats: string;

  @ApiProperty({ example: 'Nederlands, Engels', description: 'Languages spoken by the aid worker' })
  gesprokenTalen: string;
}

export class UpdateAidWorkerDto {
  @ApiProperty({ example: 'Jan', description: 'First name of the aid worker', required: false })
  voornaam?: string;

  @ApiProperty({ example: 'de Vries', description: 'Last name of the aid worker', required: false })
  achternaam?: string;

  @ApiProperty({ example: 'Man', description: 'Gender of the aid worker', enum: ['Man', 'Vrouw'], required: false })
  geslacht?: string;

  @ApiProperty({ example: 'Juridische ondersteuning', description: 'Type of assistance provided', required: false })
  typeHulpverlening?: string;

  @ApiProperty({ example: 36, description: 'Age of the aid worker', required: false })
  leeftijd?: number;

  @ApiProperty({ example: 'Rotterdam', description: 'City where the aid worker is located', required: false })
  woonplaats?: string;

  @ApiProperty({ example: 'Nederlands, Engels, Duits', description: 'Languages spoken by the aid worker', required: false })
  gesprokenTalen?: string;
}
