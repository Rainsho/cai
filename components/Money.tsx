import React, { useMemo } from 'react';

const Money: React.FC<{ value: number; pos?: boolean }> = ({ value, pos }) => {
  const color = useMemo(() => {
    if (pos !== undefined) {
      return pos ? 'pos-money' : 'neg-money';
    }
    return '';
  }, [pos]);

  return <span className={`money ${color}`}>{(value / 100).toFixed(2)}</span>;
};

export default Money;
