import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('refugees')
export class Refugee {
  @ApiProperty({ example: 1, description: 'Auto-generated unique ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Ahmad', description: 'First name' })
  @Column()
  voornaam: string;

  @ApiProperty({ example: 'Hassan', description: 'Last name' })
  @Column()
  achternaam: string;

  @ApiProperty({ example: 'Man', description: 'Gender' })
  @Column()
  geslacht: string;

  @ApiProperty({ example: 28, description: 'Age' })
  @Column()
  leeftijd: number;

  @ApiProperty({ example: 'Syria', description: 'Country of origin' })
  @Column()
  landVanHerkomst: string;

  @ApiProperty({ example: 'Arabisch, Engels', description: 'Spoken languages' })
  @Column()
  gesprokenTalen: string;

  @ApiProperty({ example: 'Amsterdam', description: 'Current city of residence' })
  @Column({ nullable: true })
  woonplaats: string;

  @ApiProperty({ example: 'In behandeling', description: 'Status of asylum application' })
  @Column({ nullable: true })
  statusAanvraag: string;

  @ApiProperty({ example: 'Huisvesting, Taalles', description: 'Type of assistance needed' })
  @Column({ nullable: true })
  typeHulpNodig: string;

  @ApiProperty({ example: 'ahmad.hassan@example.com', description: 'Contact email' })
  @Column({ nullable: true })
  contactEmail: string;

  @ApiProperty({ example: '+31612345678', description: 'Contact phone number' })
  @Column({ nullable: true })
  contactTelefoon: string;

  @ApiProperty({ example: '2025-12-18T10:30:00.000Z', description: 'Creation timestamp' })
  @CreateDateColumn()
  aangemaakt: Date;

  @ApiProperty({ example: '2025-12-18T10:30:00.000Z', description: 'Last update timestamp' })
  @UpdateDateColumn()
  bijgewerkt: Date;
}
