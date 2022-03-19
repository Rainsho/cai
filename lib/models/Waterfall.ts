import { DataTypes, InferAttributes } from '@sequelize/core';
import { Account } from './Account';
import { Base, BaseCol, defaultScope } from './Base';
import { Category, CategoryType } from './Category';
import { Label } from './Label';
import { sequelize } from './sequelize';

type WaterfallModelAttributes = {
  type: number;
  occur: Date;
  income: number;
  outcome: number;
  aid: number;
  cid: number;
  lid: number;
  uid: number;
  tid: number;
  ps: string;

  // FIXME: Association should declare in Model
  account?: InferAttributes<Account>;
  category?: InferAttributes<Category>;
  label?: InferAttributes<Label>;
};

type WaterfallCreationAttributes = Pick<WaterfallModelAttributes, 'type' | 'aid' | 'cid' | 'lid'> &
  Partial<WaterfallModelAttributes>;

export class Waterfall extends Base<WaterfallModelAttributes, WaterfallCreationAttributes> {
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
