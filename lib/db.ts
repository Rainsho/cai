import { sequelize } from './models/sequelize';
import { Account, AccountType } from './models/Account';
import { Category, CategoryType } from './models/Category';
import { Label } from './models/Label';
import { Waterfall } from './models/Waterfall';

async function init(force = false) {
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

export async function initDB(seed = false) {
  if (!seed) {
    const waterfall = await Waterfall.findByPk(1, {
      include: ['account', 'category', 'label'],
    });
    console.log(waterfall?.toJSON());

    const account = await Account.findByPk(1, { include: ['waterfalls'] });
    console.log(account?.toJSON());

    return;
  }

  try {
    await init(true);

    if (!(await Account.findByPk(1))) {
      await Account.upsert({ id: 1, genre: AccountType.CASH, name: '现金' });
    }

    if (!(await Category.findByPk(1))) {
      await Category.upsert({ id: 1, name: '餐饮', type: CategoryType.OUTCOME });
      await Category.upsert({ id: 2, name: '工资', type: CategoryType.INCOME });
    }

    if (!(await Label.findByPk(1))) {
      await Label.upsert({ id: 1, name: '日常' });
    }

    if (!(await Waterfall.findByPk(1))) {
      await Waterfall.upsert({ type: CategoryType.INCOME, income: 0.1, aid: 1, cid: 1, lid: 1 });
    }
  } catch (e) {
    console.log((e as Error).message);
  }
}

init();

export { AccountType, CategoryType };
export { Account, Category, Label, Waterfall };
