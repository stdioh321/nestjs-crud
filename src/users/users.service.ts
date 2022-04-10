import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    return UserDto.fromEntity(await this.userRepository.save(createUserDto));
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users.map(it => UserDto.fromEntity(it));
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException();
    return UserDto.fromEntity(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userRepository.update({ id: id }, updateUserDto);
    if (updated?.affected > 0) return await this.findOne(id);
    throw new NotFoundException();
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException();
    return await this.userRepository.delete({ id: id }) && user;
  }
}
