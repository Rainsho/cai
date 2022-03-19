import { InferAttributes } from '@sequelize/core';
import { Waterfall } from './models';

export enum DateUnit {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
}

export type Balance<T extends DateUnit> = {
  unit: T;
  date: string;
  income: number;
  outcome: number;
};

export type MonthBalance = Balance<DateUnit.MONTH>;

export namespace APIs {
  export type FEED = {
    balances: MonthBalance[];
    list: InferAttributes<Waterfall>[];
  };

  export type MONTH_LIST = {
    date: string;
    list: InferAttributes<Waterfall>[];
  };
}
