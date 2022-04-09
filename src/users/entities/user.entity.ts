import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type UserDocument = User & Document;

@Schema()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Prop()
  @Column({length:255})
  email: string;

  @Prop()
  @Column({length:255})
  name: string;

  @Prop()
  @Column({length:255})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
