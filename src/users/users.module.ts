import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { userProviders } from './entities/user.provider';
import { DatabaseModule } from './../db/database.module';
@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...userProviders
  ],
})
export class UsersModule {}
