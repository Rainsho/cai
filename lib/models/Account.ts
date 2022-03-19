import { DataTypes, InferAttributes } from '@sequelize/core';
import { AccountType } from '../types';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';
import type { Waterfall } from './Waterfall';

type AccountModelAttributes = {
  genre: string;
  name: string;
  show: boolean;
  net: boolean;
  credit: boolean;
  limit: number;
  billDay: number;
  dueDay: number;
  sort: number;
  waterfalls?: InferAttributes<Waterfall>[];
};

type AccountCreationAttributes = Pick<AccountModelAttributes, 'genre' | 'name'> &
  Partial<AccountModelAttributes>;

export class Account extends Base<AccountModelAttributes, AccountCreationAttributes> {
  declare genre: string;
  declare name: string;
  declare show: boolean;
  declare net: boolean;
  declare credit: boolean;
  declare limit: number;
  declare billDay: number;
  declare dueDay: number;
  declare sort: number;
}

Account.init(
  {
    ...BaseCol,
    genre: {
      type: DataTypes.STRING,
      defaultValue: AccountType.VIRTUAL,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    net: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    credit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    limit: DataTypes.DECIMAL(12, 2),
    billDay: DataTypes.TINYINT,
    dueDay: DataTypes.TINYINT,
    sort: DataTypes.SMALLINT,
  },
  { sequelize, defaultScope, tableName: 'accounts', paranoid: true }
);
