import { DataTypes } from '@sequelize/core';
import { Base, BaseCol } from './Base';
import { sequelize } from './sequelize';

export class Account extends Base {
  declare name: string;
  declare show: boolean;
  declare net: boolean;
  declare credit: boolean;
  declare limit: number;
  declare billDay: number;
  declare dueDay: number;
}

Account.init(
  {
    ...BaseCol,

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
  },
  { tableName: 'accounts', sequelize }
);
