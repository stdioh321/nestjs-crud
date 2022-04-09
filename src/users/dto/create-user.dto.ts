import { User } from "../entities/user.entity";

export class CreateUserDto {
  email: string;
  name: string;
  password: string;


  static toEntity(currCreateUserDto : CreateUserDto) : User {
    const user = new User();
    user.name = currCreateUserDto.name;
    user.email = currCreateUserDto.email;
    user.password = currCreateUserDto.password;
    return user;
  }
  static fromEntity(user : User) : CreateUserDto {
    const createUserDto =  new CreateUserDto();
    createUserDto.name = user.name;
    createUserDto.email = user.email;
    createUserDto.password = user.password;
    return createUserDto;
  }
}
