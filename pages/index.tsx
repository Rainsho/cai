import { Button, Card, Empty, Grid, List, Skeleton } from 'antd-mobile';
import { DownOutline, RightOutline } from 'antd-mobile-icons';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Money from '../components/Money';
import MonthTitle from '../components/MonthTitle';
import WaterfallItem from '../components/WaterfallItem';
import { useStore } from '../hooks/useStore';
import type { Waterfall } from '../lib/models';
import { request } from '../lib/request';
import { APIs, InferAttributes } from '../lib/types';
import styles from '../styles/Home.module.css';

enum CardState {
  CLOSE = 0,
  OPEN = 1,
  LOADING = 2,
}

const Home: NextPage = () => {
  const { balances, list, loading } = useStore(({ balances, list, loading }) => ({
    balances,
    list,
    loading: Boolean(loading.fetchFeed),
  }));
  const [record, setRecord] = useState<Record<string, Array<InferAttributes<Waterfall>>>>({});
  const [cardState, setCardState] = useState<Record<string, CardState>>({});
  const router = useRouter();

  const handleClick = useCallback(async (name: string, state: CardState, fetch: boolean) => {
    if (state === CardState.OPEN) {
      setCardState(pre => Object.assign({}, pre, { [name]: CardState.CLOSE }));
      return;
    }

    if (fetch) {
      setCardState(pre => Object.assign({}, pre, { [name]: CardState.LOADING }));

      try {
        const data = await request.get<APIs.MONTH_LIST>(`/api/list/${name}`);
        setRecord(pre => Object.assign({}, pre, { [name]: data.list }));
      } catch (e) {}
    }

    setCardState(pre => Object.assign({}, pre, { [name]: CardState.OPEN }));
  }, []);

  const handleUpsert = useCallback(
    (waterfall: InferAttributes<Waterfall> | null) => {
      useStore.setState({ waterfall });
      router.push('/bill');
    },
    [router]
  );

  useEffect(() => {
    useStore
      .getState()
      .fetchFeed()
      .then(feed => {
        if (feed && feed.balances.length > 0) {
          const { name } = feed.balances[0];
          setRecord({ [name]: feed.list });
          setCardState({ [name]: CardState.OPEN });
        }
      });
  }, []);

  if (loading) {
    return (
      <>
        <h1 className={styles.title}>Welcome to CAI</h1>
        <Card>
          <Skeleton.Title />
          <Skeleton.Paragraph />
        </Card>
      </>
    );
  }

  if (balances.length === 0) {
    return (
      <>
        <h1 className={styles.title}>Welcome to CAI</h1>
        <Card>
          <Empty style={{ paddingBlock: '4rem' }} description="暂无数据" />
        </Card>
      </>
    );
  }

  const { income, outcome } = balances[0];

  return (
    <>
      <h1 className={styles.title}>Welcome to CAI</h1>
      <Card
        title={<span className="largeFont">本月</span>}
        style={{ paddingInline: '1rem', fontSize: '1rem' }}
      >
        <Grid columns={2} gap="0.5rem">
          <Grid.Item span={2}>
            <h3>本月支出</h3>
            <Money value={outcome} pos={false} />
          </Grid.Item>
          <Grid.Item>
            <h3>本月收入</h3>
            <Money value={income} pos />
          </Grid.Item>
          <Grid.Item>
            <h3>本月差额</h3>
            <Money value={income - outcome} pos={income - outcome > 0} />
          </Grid.Item>
          <Grid.Item span={2} style={{ padding: '1rem' }}>
            <Button block color="primary" onClick={() => handleUpsert(null)}>
              记一笔
            </Button>
          </Grid.Item>
        </Grid>
      </Card>
      {balances.map(balance => (
        <Card
          key={balance.name}
          title={<MonthTitle {...balance} />}
          extra={cardState[balance.name] > CardState.CLOSE ? <DownOutline /> : <RightOutline />}
          className={styles.balanceCard}
          onHeaderClick={() =>
            handleClick(balance.name, cardState[balance.name], !record[balance.name])
          }
        >
          <List
            style={cardState[balance.name] > CardState.CLOSE ? {} : { display: 'none' }}
            mode="card"
          >
            {cardState[balance.name] === CardState.LOADING ? (
              <Skeleton.Paragraph />
            ) : record[balance.name] && record[balance.name].length > 0 ? (
              record[balance.name].map(waterfall => (
                <WaterfallItem key={waterfall.id} waterfall={waterfall} onClick={handleUpsert} />
              ))
            ) : (
              <Empty />
            )}
          </List>
        </Card>
      ))}
    </>
  );
};

export default Home;
