import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;


  static toEntity(currCreateUserDto : CreateUserDto) : User {
    const user = new User();
    Object.assign(user, currCreateUserDto);
    return user;
  }
  static fromEntity(user : User) : CreateUserDto {
    const createUserDto =  new CreateUserDto();
    Object.assign(createUserDto, user);
    return createUserDto;
  }
}
