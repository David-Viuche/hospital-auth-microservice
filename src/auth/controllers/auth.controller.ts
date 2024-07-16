import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { UserDto } from '../models/user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: UserDto) {
    return await this.authService.signIn(signInDto.email, signInDto.pass);
  }

  @HttpCode(HttpStatus.OK)
  @Post('singup')
  async signUp(@Body() signUpDto: UserDto) {
    return await this.authService.signUp(
      signUpDto.email,
      signUpDto.pass,
      signUpDto.names,
    );
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
