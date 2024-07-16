import { Inject, Injectable } from '@nestjs/common';
import { ModelConstants } from 'src/sequelize/constants/providers.constants';
import { Users } from 'src/sequelize/models/users.model';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject(ModelConstants.USER_REPOSITORY)
    private users: typeof Users,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    const result = await this.users.findOne({
      where: {
        email,
      },
    });
    return result;
  }

  async create(
    email: string,
    pass: string,
    names: string,
  ): Promise<User | undefined> {
    const result = await this.users.create({
      email,
      pass,
      names,
    });
    return result;
  }
  async findOneById(id: number): Promise<User | undefined> {
    const result = await this.users.findOne({
      where: {
        id,
      },
    });
    return result;
  }

  async update(
    id: number,
    email: string,
    pass: string,
    names: string,
  ): Promise<User | undefined> {
    const result = await this.users.update(
      {
        email,
        pass,
        names,
      },
      {
        where: {
          id,
        },
      },
    );
    return result;
  }

  async deleteById(id: number): Promise<User | undefined> {
    const result = await this.users.destroy({
      where: {
        id,
      },
    });
    return result;
  }
}
