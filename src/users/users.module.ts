import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { userProviders } from './entities/user.provider';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    DatabaseModule
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...userProviders
  ],
})
export class UsersModule {}
