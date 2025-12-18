import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('refugees')
export class Refugee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  voornaam: string;

  @Column()
  achternaam: string;

  @Column()
  geslacht: string;

  @Column()
  leeftijd: number;

  @Column()
  landVanHerkomst: string;

  @Column()
  gesprokenTalen: string;

  @Column({ nullable: true })
  woonplaats: string;

  @Column({ nullable: true })
  statusAanvraag: string;

  @Column({ nullable: true })
  typeHulpNodig: string;

  @Column({ nullable: true })
  contactEmail: string;

  @Column({ nullable: true })
  contactTelefoon: string;

  @CreateDateColumn()
  aangemaakt: Date;

  @UpdateDateColumn()
  bijgewerkt: Date;
}
