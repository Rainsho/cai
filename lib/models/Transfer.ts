import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';

export class Transfer extends Base {
  declare occur: Date;
  declare amount: number;
  declare outAid: number;
  declare inAid: number;
  declare lid: number;
  declare ps: string;
}

Transfer.init(
  {
    ...BaseCol,

    occur: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },

    outAid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inAid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lid: DataTypes.INTEGER,

    ps: DataTypes.STRING,
  },
  { sequelize, defaultScope, tableName: 'transfers' }
);
