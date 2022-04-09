import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>) { }

  create(createUserDto: CreateUserDto) {
    const user = CreateUserDto.toEntity(createUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userRepository.update({ id: id }, updateUserDto);
    if (updated) return this.findOne(id);
    return null;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if(!user) return null;
    return await this.userRepository.delete({ id: id }) && user;
  }
}
