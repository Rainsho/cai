import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { CategoryType } from './Category';
import { sequelize } from './sequelize';

export class Waterfall extends Base {
  declare type: number;
  declare occur: Date;
  declare income: number;
  declare outcome: number;
  declare aid: number;
  declare cid: number;
  declare lid: number;
  declare uid: number;
  declare tid: number;
  declare ps: string;
}

Waterfall.init(
  {
    ...BaseCol,
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    occur: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    income: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    outcome: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    aid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ps: DataTypes.STRING,
  },
  { sequelize, defaultScope, tableName: 'waterfalls' }
);

Waterfall.addHook('beforeValidate', async (waterfall: Waterfall) => {
  if (!Object.values(CategoryType).includes(waterfall.type)) {
    throw new Error('Invalid type');
  }
});
