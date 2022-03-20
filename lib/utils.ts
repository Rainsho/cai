import type { Waterfall } from './models';
import { CategoryType, InferAttributes, InferCreationAttributes } from './types';

export const logger = (...args: any[]) => console.log(new Date(), ...args);

export function calcBalance<T extends { income: number; outcome: number }>(
  arr: T[]
): Array<T & { balance: number }> {
  let balance = 0;

  const list = arr
    .slice()
    .reverse()
    .map(x => {
      balance += x.income;
      balance -= x.outcome;

      return Object.assign(x, { balance });
    });

  return list.reverse();
}

export function waterfallCreator(
  waterfall: InferAttributes<Waterfall> | null,
  defaultType = CategoryType.OUTCOME
): InferCreationAttributes<Waterfall> & { id?: number } {
  if (!waterfall) {
    return { type: defaultType, aid: -1, cid: -1, lid: -1 };
  }

  const { id, type, occur, income, outcome, aid, cid, lid, uid, tid, ps } = waterfall;

  return { id, type, occur, income, outcome, aid, cid, lid, uid, tid, ps };
}
