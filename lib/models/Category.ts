import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';

export class Category extends Base {
  declare name: string;
  declare cid: number;
  declare type: CategoryType;
}

export enum CategoryType {
  INCOME = 1,
  OUTCOME = 0,
}

Category.init(
  {
    ...BaseCol,

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cid: DataTypes.INTEGER,
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { sequelize, defaultScope, tableName: 'categories' }
);

Category.addHook('beforeValidate', async (category: Category) => {
  if (!category.cid) return;

  const parent = await Category.findByPk(category.cid);
  if (!parent) throw new Error('Parent category is not exist');

  if (!Object.values(CategoryType).includes(category.type)) {
    throw new Error('Invalid type');
  }
});
