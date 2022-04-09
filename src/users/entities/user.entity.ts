import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type UserDocument = User & Document;


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({length:255})
  email: string;

  @Column({length:255})
  name: string;

  @Column({length:255})
  password: string;
}