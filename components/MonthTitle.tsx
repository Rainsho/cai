import { Grid } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import React from 'react';
import { MonthBalance } from '../lib/types';
import Money from './Money';
import styles from './styles.module.css';

const MonthTitle: React.FC<MonthBalance> = ({ name, income, outcome }) => {
  const [y, m] = name.split('-');

  return (
    <div className={styles.monthTitle}>
      <div className={styles.left}>
        <div className={styles.month}>
          <div className="largeFont">{m}</div>
          <div>{y}</div>
        </div>
        <div>
          <div>
            收入: <Money value={income} pos />
          </div>
          <div>
            支出: <Money value={outcome} pos={false} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.balance}>
          <div>结余</div>
          <div>
            <Money value={income - outcome} pos={income >= outcome} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthTitle;
