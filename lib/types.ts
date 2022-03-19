import { InferAttributes, InferCreationAttributes } from '@sequelize/core';
import { Account, Category, Label, Waterfall } from './models';

export enum BalanceType {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  ACCOUNT = 'account',
  ALL = 'ALL',
}

export type Balance<T extends BalanceType> = {
  type: T;
  name: string;
  income: number;
  outcome: number;
};

export type MonthBalance = Balance<BalanceType.MONTH>;

export type AccountBalance = Balance<BalanceType.ACCOUNT> & { aid: number };

export namespace APIs {
  export type FEED = {
    balances: MonthBalance[];
    list: InferAttributes<Waterfall>[];
    meta: {
      accounts: InferAttributes<Account>[];
      categories: InferAttributes<Category>[];
      labels: InferAttributes<Label>[];
    };
  };

  export type MONTH_LIST = {
    date: string;
    list: InferAttributes<Waterfall>[];
  };

  export type ACCOUNT_FEED = {
    all: Balance<BalanceType.ALL>;
    balances: AccountBalance[];
  };

  export type ACCOUNT_LIST = {
    account: InferAttributes<Account>;
    list: Array<InferAttributes<Waterfall> & { balance: number }>;
  };

  export type UPSERT_WATERFALL = InferCreationAttributes<Waterfall>;
}
