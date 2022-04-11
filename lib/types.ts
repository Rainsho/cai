import type { Model } from '@sequelize/core';
import type { Account, Category, Label, Waterfall } from './models';

export enum BalanceType {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  ACCOUNT = 'account',
  ALL = 'ALL',
}

export enum AccountType {
  CASH = '现金',
  CREDIT = '信用卡',
  DEPOSIT = '储蓄卡',
  INVEST = '投资账户',
  PRE_PAID = '储值卡',
  VIRTUAL = '虚拟',
}

export enum CategoryType {
  INCOME = 0,
  OUTCOME = 1,
  TRANSFER = 2,
  TRANSFER_IN = 3,
  TRANSFER_OUT = 4,
}

export type Balance<T extends BalanceType> = {
  type: T;
  name: string;
  income: number;
  outcome: number;
};

export type MonthBalance = Balance<BalanceType.MONTH>;

export type AccountBalance = Balance<BalanceType.ACCOUNT> & { aid: number };

export type InferAttributes<T> = T extends Model<infer M, infer C> ? M : never;

export type InferCreationAttributes<T> = T extends Model<infer M, infer C> ? C : never;

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

export type TransferHelper = {
  aid_out: number;
  aid_in: number;
  amount: string;
};
