import { Sequelize } from '@sequelize/core';
import path from 'path';
import { DB_FILE } from '../constants';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(process.cwd(), DB_FILE),
  logging: (sql, time) => console.log('run SQL(%s) in %d ms', sql, time),
  // logging: (_, time) => console.log('run SQL(%s) in %d ms', 'sql', time),
  benchmark: true,
});
