import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDto } from 'src/auth/models/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CRUD - Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async createUser(@Body() user: UserDto) {
    return await this.usersService.create(user.email, user.pass, user.names);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findOneById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UserDto,
  ) {
    return await this.usersService.update(
      id,
      user.email,
      user.pass,
      user.names,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.deleteById(id);
  }
}
