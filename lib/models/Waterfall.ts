import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { CategoryType } from './Category';
import { sequelize } from './sequelize';

export class Waterfall extends Base {
  declare type: number;
  declare occur: Date;
  declare amount: number;
  declare cid: number;
  declare aid: number;
  declare lid: number;
  declare uid: number;
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
    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },

    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    aid: {
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

    ps: DataTypes.STRING,
  },
  { sequelize, defaultScope, tableName: 'waterfalls' }
);

Waterfall.addHook('beforeValidate', async (waterfall: Waterfall) => {
  if (!Object.values(CategoryType).includes(waterfall.type)) {
    throw new Error('Invalid type');
  }
});
