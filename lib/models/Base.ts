import { CreationOptional, DataTypes, Model } from '@sequelize/core';

export class Base extends Model {
  declare id: CreationOptional<number>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export const BaseCol = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};
