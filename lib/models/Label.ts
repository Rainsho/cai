import { DataTypes } from '@sequelize/core';
import { Base, BaseCol, defaultScope } from './Base';
import { sequelize } from './sequelize';

type LabelModelAttributes = {
  name: string;
  sort: number;
};

type LabelCreationAttributes = Pick<LabelModelAttributes, 'name'>;

export class Label extends Base<LabelModelAttributes, LabelCreationAttributes> {
  declare name: string;
}

Label.init(
  {
    ...BaseCol,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort: DataTypes.SMALLINT,
  },
  { sequelize, defaultScope, tableName: 'labels' }
);
