import { Op } from '@sequelize/core';
import { Account, Category, Label, sequelize, Waterfall } from './models';
import { seeds } from './seeds';

export async function init(force = false) {
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

export async function insertSeeds(seed = false) {
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

    await Account.destroy({ where: { createdAt: { [Op.lt]: new Date() } } });
    await Category.destroy({ where: { createdAt: { [Op.lt]: new Date() } } });
    await Label.destroy({ where: { createdAt: { [Op.lt]: new Date() } } });
    await Waterfall.destroy({ where: { createdAt: { [Op.lt]: new Date() } } });

    for (const account of seeds.accounts) {
      await Account.create(account);
    }

    for (const category of seeds.categories) {
      await Category.create(category);
    }

    for (const label of seeds.labels) {
      await Label.create(label);
    }

    for (const waterfall of seeds.waterfalls) {
      await Waterfall.create(waterfall);
    }
  } catch (e) {
    console.log((e as Error).message);
  }
}

init();
