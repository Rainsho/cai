import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import { CategoryType } from '../lib/types';
import styles from '../styles/App.module.css';

const Home: NextPage = () => {
  const { balances, list, loading } = useStore(({ balances, list, loading }) => ({
    balances,
    list,
    loading: Boolean(loading.fetchFeed),
  }));

  useEffect(() => {
    useStore.getState().fetchFeed();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (balances.length === 0) {
    return <h1>no content</h1>;
  }

  const { income, outcome } = balances[0];

  return (
    <>
      <h1 className={styles.title}>Welcome to CAI</h1>

      <p className={styles.description}>
        <p>本月支出: {outcome}</p>
        <p>本月收入: {income}</p>
        <p>本月差额: {income - outcome}</p>
      </p>

      <div className={styles.grid}>
        {list.map(record => (
          <p key={record.id} className={styles.card}>
            <p>{record.account?.name}</p>
            <p>{record.category?.subName || record.category?.name}</p>
            <p>{record.type === CategoryType.INCOME ? record.income : record.outcome}</p>
          </p>
        ))}
      </div>
    </>
  );
};

export default Home;
