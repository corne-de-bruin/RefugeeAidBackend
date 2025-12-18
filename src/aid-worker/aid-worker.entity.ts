import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('aid_workers')
export class AidWorker {
  @ApiProperty({ example: 1, description: 'Auto-generated ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1, description: 'Unique number identifier' })
  @Column()
  nr: number;

  @ApiProperty({ example: 'Bram', description: 'First name' })
  @Column()
  voornaam: string;

  @ApiProperty({ example: 'Visser', description: 'Last name' })
  @Column()
  achternaam: string;

  @ApiProperty({ example: 'Man', description: 'Gender' })
  @Column()
  geslacht: string;

  @ApiProperty({ example: 'Juridische ondersteuning', description: 'Type of assistance' })
  @Column()
  typeHulpverlening: string;

  @ApiProperty({ example: 45, description: 'Age' })
  @Column()
  leeftijd: number;

  @ApiProperty({ example: 'Amsterdam', description: 'City' })
  @Column()
  woonplaats: string;

  @ApiProperty({ example: 'Nederlands, Engels, Duits', description: 'Spoken languages' })
  @Column('text')
  gesprokenTalen: string;
}
