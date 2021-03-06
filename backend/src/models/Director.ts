import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('directors')
class Director {
  @PrimaryGeneratedColumn()
  director_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;
}

export default Director;
