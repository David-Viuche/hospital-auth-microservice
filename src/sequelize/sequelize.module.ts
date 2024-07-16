import { Module } from '@nestjs/common';
import { sequelizeProvider } from './services/sequelize.service';

@Module({
  providers: [...sequelizeProvider],
  exports: [...sequelizeProvider],
})
export class SequelizeModule {}
