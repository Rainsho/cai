import { List, Space } from 'antd-mobile';
import moment from 'moment';
import React from 'react';
import type { Waterfall } from '../lib/models';
import { CategoryType, InferAttributes } from '../lib/types';
import Money from './Money';
import styles from './styles.module.css';

const WaterfallItem: React.FC<{ waterfall: InferAttributes<Waterfall> }> = ({ waterfall }) => {
  const pos = waterfall.type === CategoryType.INCOME || waterfall.type === CategoryType.TRANSFER_IN;
  const value = pos ? waterfall.income : waterfall.outcome;

  return (
    <List.Item>
      <div className={styles.itemRow}>
        <div className={styles.itemLeft}>
          <div>{waterfall.category?.subName || waterfall.category?.name}</div>
          <div className="smallFont" style={{ marginTop: 4 }}>
            {moment(waterfall.occur).format('MM-DD HH:mm')}
          </div>
        </div>
        <div className={styles.itemRight}>
          <Money value={value} pos={pos} />
        </div>
      </div>
    </List.Item>
  );
};

export default WaterfallItem;
