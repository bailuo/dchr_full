import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('key-record')
export class KeyRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'SYSTEM' })
  user: string;

  @Column()
  date: Date;

  @Column('text')
  publicKey: string;

  @Column('text')
  privateKey: string;
}