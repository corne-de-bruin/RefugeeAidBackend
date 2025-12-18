import { ApiProperty } from '@nestjs/swagger';

export class CreateRefugeeDto {
  @ApiProperty({ example: 'Ahmad', description: 'First name of the refugee' })
  voornaam: string;

  @ApiProperty({ example: 'Hassan', description: 'Last name of the refugee' })
  achternaam: string;

  @ApiProperty({ example: 'Man', description: 'Gender of the refugee', enum: ['Man', 'Vrouw'] })
  geslacht: string;

  @ApiProperty({ example: 28, description: 'Age of the refugee' })
  leeftijd: number;

  @ApiProperty({ example: 'Syria', description: 'Country of origin' })
  landVanHerkomst: string;

  @ApiProperty({ example: 'Arabisch, Engels', description: 'Languages spoken by the refugee' })
  gesprokenTalen: string;

  @ApiProperty({ example: 'Amsterdam', description: 'Current city of residence', required: false })
  woonplaats?: string;

  @ApiProperty({ example: 'In behandeling', description: 'Status of asylum application', required: false })
  statusAanvraag?: string;

  @ApiProperty({ example: 'Huisvesting, Taalles', description: 'Type of assistance needed', required: false })
  typeHulpNodig?: string;

  @ApiProperty({ example: 'ahmad.hassan@example.com', description: 'Contact email address', required: false })
  contactEmail?: string;

  @ApiProperty({ example: '+31612345678', description: 'Contact phone number', required: false })
  contactTelefoon?: string;
}

export class UpdateRefugeeDto {
  @ApiProperty({ example: 'Ahmad', description: 'First name of the refugee', required: false })
  voornaam?: string;

  @ApiProperty({ example: 'Hassan', description: 'Last name of the refugee', required: false })
  achternaam?: string;

  @ApiProperty({ example: 'Man', description: 'Gender of the refugee', enum: ['Man', 'Vrouw'], required: false })
  geslacht?: string;

  @ApiProperty({ example: 29, description: 'Age of the refugee', required: false })
  leeftijd?: number;

  @ApiProperty({ example: 'Syria', description: 'Country of origin', required: false })
  landVanHerkomst?: string;

  @ApiProperty({ example: 'Arabisch, Engels, Nederlands', description: 'Languages spoken by the refugee', required: false })
  gesprokenTalen?: string;

  @ApiProperty({ example: 'Utrecht', description: 'Current city of residence', required: false })
  woonplaats?: string;

  @ApiProperty({ example: 'Goedgekeurd', description: 'Status of asylum application', required: false })
  statusAanvraag?: string;

  @ApiProperty({ example: 'Arbeidsbemiddeling', description: 'Type of assistance needed', required: false })
  typeHulpNodig?: string;

  @ApiProperty({ example: 'ahmad.hassan@example.com', description: 'Contact email address', required: false })
  contactEmail?: string;

  @ApiProperty({ example: '+31612345678', description: 'Contact phone number', required: false })
  contactTelefoon?: string;
}
