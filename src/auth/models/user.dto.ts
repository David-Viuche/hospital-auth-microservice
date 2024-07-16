import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(12)
  @MinLength(8)
  pass: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(10)
  @MinLength(5)
  names?: string;
}
