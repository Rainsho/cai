import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';

export class Label extends Base {
  declare name: string;
}

Label.init(
  {
    ...BaseCol,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, defaultScope, tableName: 'labels' }
);
