import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';

export enum AccountType {
  CASH = '现金',
  CREDIT = '信用卡',
  DEPOSIT = '储蓄卡',
  INVEST = '投资账户',
  PRE_PAID = '储值卡',
  VIRTUAL = '虚拟',
}

export class Account extends Base {
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
  { sequelize, defaultScope, tableName: 'accounts' }
);
