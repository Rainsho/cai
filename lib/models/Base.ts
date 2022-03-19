import { CreationOptional, DataTypes, Model, ModelOptions } from '@sequelize/core';

type BaseAttributes = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};
export class Base<T = any, C = {}> extends Model<T & BaseAttributes, C> {
  declare id: CreationOptional<number>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
}

export const BaseCol = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
};

export const defaultScope: ModelOptions['defaultScope'] = {
  attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
};
