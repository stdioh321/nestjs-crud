import { User } from "../entities/user.entity";

export class UserDto {
  id: number = null;
  name: string = null;
  email: string = null;


  static toEntity(dto: UserDto): User {
    const user = new User();
    Object.getOwnPropertyNames(dto).forEach(it => {
      user[it] = dto[it];
    });
    return user;
  }
  static fromEntity(user: User): UserDto {
    const userDto = new UserDto();
    Object.getOwnPropertyNames(userDto).forEach(it => {
      userDto[it] = user[it];
    });
    return userDto;
  }
}
