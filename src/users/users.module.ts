import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { Users } from 'src/sequelize/models/users.model';
import { ModelConstants } from 'src/sequelize/constants/providers.constants';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    Users,
    {
      provide: ModelConstants.USER_REPOSITORY,
      useValue: Users,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
