import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aid_workers')
export class AidWorker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nr: number;

  @Column()
  voornaam: string;

  @Column()
  achternaam: string;

  @Column()
  geslacht: string;

  @Column()
  typeHulpverlening: string;

  @Column()
  leeftijd: number;

  @Column()
  woonplaats: string;

  @Column('text')
  gesprokenTalen: string;
}
