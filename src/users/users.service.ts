import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>) { }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userRepository.update({ id: id }, updateUserDto);
    if (updated?.affected > 0) return this.findOne(id);
    throw new NotFoundException();
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if(!user) throw new NotFoundException();
    return await this.userRepository.delete({ id: id }) && user;
  }
}
