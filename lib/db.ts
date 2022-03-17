import { Account } from './models/Account';
import { Category, CategoryType } from './models/Category';
import { Label } from './models/Label';
import { sequelize } from './models/sequelize';
import { Transfer } from './models/Transfer';
import { Waterfall } from './models/Waterfall';

Label.hasOne(Waterfall, { foreignKey: 'lid', constraints: false });
Waterfall.belongsTo(Label, { foreignKey: 'lid', as: 'label', constraints: false });

export async function initDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });

    if (!(await Account.findByPk(1))) {
      await Account.upsert({ id: 1, name: '现金' });
    }

    if (!(await Label.findByPk(1))) {
      await Label.upsert({ id: 1, name: '日常' });
    }

    if (!(await Category.findByPk(1))) {
      await Category.upsert({ id: 1, name: '餐饮', type: CategoryType.OUTCOME });
      await Category.upsert({ id: 2, name: '工资', type: CategoryType.INCOME });
    }

    const waterfall = await Waterfall.findByPk(1, { include: ['label'] });

    if (!waterfall) {
      await Waterfall.create({ type: CategoryType.OUTCOME, amount: 0.1, cid: 1, aid: 1, lid: 1 });
    } else {
      console.log(waterfall.toJSON());
    }
  } catch (e) {
    console.log((e as Error).message);
  }
}

export { CategoryType };
export { Account, Category, Label, Transfer, Waterfall };
