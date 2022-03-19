import { DataTypes, InferAttributes } from '@sequelize/core';
import { CategoryType } from '../types';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';
import type { Waterfall } from './Waterfall';

type CategoryModelAttributes = {
  name: string;
  subName: string;
  type: CategoryType;
  sort: number;
  waterfalls?: InferAttributes<Waterfall>[];
};

type CategoryCreationsAttributes = Omit<CategoryModelAttributes, 'subName' | 'sort'> &
  Partial<CategoryModelAttributes>;

export class Category extends Base<CategoryModelAttributes, CategoryCreationsAttributes> {
  declare name: string;
  // declare cid: number;
  declare subName: string;
  declare type: CategoryType;
  declare sort: number;
}

Category.init(
  {
    ...BaseCol,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // cid: DataTypes.INTEGER,
    subName: DataTypes.STRING,
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    sort: DataTypes.SMALLINT,
  },
  { sequelize, defaultScope, tableName: 'categories', paranoid: true }
);

Category.addHook('beforeValidate', async (category: Category) => {
  // if (!category.cid) return;

  // const parent = await Category.findByPk(category.cid);
  // if (!parent) throw new Error('Parent category is not exist');

  if (!Object.values(CategoryType).includes(category.type)) {
    throw new Error('Invalid type');
  }
});
