import { Table, Model, Column } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Users extends Model {
  @Column
  email: string;

  @Column
  pass: string;

  @Column
  names: string;
}
