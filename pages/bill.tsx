import { NavBar, Tabs } from 'antd-mobile';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import BillForm from '../components/BillForm';
import TransferForm from '../components/TransferForm';
import { useStore } from '../hooks/useStore';
import { CategoryType } from '../lib/types';

const Bill: React.FC = () => {
  const { back } = useRouter();
  const { meta, waterfall } = useStore(({ meta, waterfall }) => ({ meta, waterfall }));
  const defaultKey = useMemo(() => {
    if (!waterfall) return undefined;

    let type = -1;

    switch (waterfall.type) {
      case CategoryType.OUTCOME:
        type = CategoryType.OUTCOME;
        break;
      case CategoryType.INCOME:
        type = CategoryType.INCOME;
        break;
      case CategoryType.TRANSFER:
      case CategoryType.TRANSFER_OUT:
      case CategoryType.TRANSFER_IN:
        type = CategoryType.TRANSFER;
        break;
      default:
      // should never happen
    }

    return type.toString();
  }, [waterfall]);

  return (
    <>
      <NavBar onBack={back}>记一笔</NavBar>
      <Tabs defaultActiveKey={defaultKey}>
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
          disabled={!!waterfall && +defaultKey! !== CategoryType.TRANSFER}
        >
          <TransferForm
            type={waterfall ? waterfall.type : CategoryType.TRANSFER}
            meta={meta}
            waterfall={waterfall}
          />
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default Bill;
