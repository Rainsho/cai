import { NavBar, Tabs } from 'antd-mobile';
import { useRouter } from 'next/router';
import React from 'react';
import BillForm from '../components/BillForm';
import { useStore } from '../hooks/useStore';
import { CategoryType } from '../lib/types';

const Bill: React.FC = () => {
  const { back } = useRouter();
  const { meta, waterfall } = useStore(({ meta, waterfall }) => ({ meta, waterfall }));

  return (
    <>
      <NavBar onBack={back}>记一笔</NavBar>
      <Tabs defaultActiveKey={waterfall?.type.toString()}>
        <Tabs.Tab
          title="支出"
          key={CategoryType.OUTCOME}
          disabled={!!waterfall && waterfall.type !== CategoryType.OUTCOME}
        >
          <BillForm type={CategoryType.OUTCOME} meta={meta} waterfall={waterfall} />
        </Tabs.Tab>
        <Tabs.Tab
          title="收入"
          key={CategoryType.INCOME}
          disabled={!!waterfall && waterfall.type !== CategoryType.INCOME}
        >
          <BillForm type={CategoryType.INCOME} meta={meta} waterfall={waterfall} />
        </Tabs.Tab>
        <Tabs.Tab
          title="转账"
          key={CategoryType.TRANSFER}
          disabled={!!waterfall && waterfall.type !== CategoryType.TRANSFER}
        >
          TODO
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default Bill;
