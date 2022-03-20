import create from 'zustand';
import type { Waterfall } from '../lib/models';
import { request } from '../lib/request';
import { APIs, InferAttributes } from '../lib/types';

type StoreData = {
  balances: APIs.FEED['balances'];
  list: APIs.FEED['list'];
  meta: APIs.FEED['meta'];
  loading: Partial<Record<keyof StoreAsyncFunc, boolean>>;
  waterfall: InferAttributes<Waterfall> | null;
};

type StoreAsyncFunc = {
  fetchFeed: () => Promise<APIs.FEED | null>;
};

export const useStore = create<StoreData & StoreAsyncFunc>(set => ({
  balances: [],
  list: [],
  meta: { accounts: [], categories: [], labels: [] },
  loading: {},
  waterfall: null,
  fetchFeed: async () => {
    try {
      set({ loading: { fetchFeed: true } });
      const feed = await request.get<APIs.FEED>('/api/list');
      set(feed);
      return feed;
    } catch (e) {
      return null;
    } finally {
      set({ loading: { fetchFeed: false } });
    }
  },
}));
