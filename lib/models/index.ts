import { sequelize } from './sequelize';
import { Account } from './Account';
import { Category } from './Category';
import { Label } from './Label';
import { Waterfall } from './Waterfall';

export async function initDB(force = false) {
  try {
    Account.hasMany(Waterfall, { foreignKey: 'aid', as: 'waterfalls', constraints: false });
    Category.hasMany(Waterfall, { foreignKey: 'cid', as: 'waterfalls', constraints: false });
    Label.hasMany(Waterfall, { foreignKey: 'lid', as: 'waterfalls', constraints: false });

    Waterfall.belongsTo(Account, { foreignKey: 'aid', as: 'account', constraints: false });
    Waterfall.belongsTo(Category, { foreignKey: 'cid', as: 'category', constraints: false });
    Waterfall.belongsTo(Label, { foreignKey: 'lid', as: 'label', constraints: false });

    await sequelize.authenticate();
    await sequelize.sync({ force });
  } catch (e) {
    console.log((e as Error).message);
  }
}

initDB();

export * from './sequelize';
export * from './Account';
export * from './Category';
export * from './Label';
export * from './Waterfall';
