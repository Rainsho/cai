import { CreationAttributes, Op } from '@sequelize/core';
import { Account, AccountType, Category, CategoryType, initDB, Label, Waterfall } from '../models';

const accounts: CreationAttributes<Account>[] = [
  { genre: AccountType.CASH, name: '现金' },
  { genre: AccountType.CREDIT, name: '招行信用卡' },
  { genre: AccountType.CREDIT, name: '交通银行信用卡' },
  { genre: AccountType.CREDIT, name: '中国银行信用卡' },
  { genre: AccountType.DEPOSIT, name: '招行储蓄卡' },
  { genre: AccountType.DEPOSIT, name: '交行储蓄卡' },
  { genre: AccountType.INVEST, name: '余额宝' },
  { genre: AccountType.INVEST, name: '招行理财' },
  { genre: AccountType.INVEST, name: '定期' },
  { genre: AccountType.INVEST, name: '基金' },
  { genre: AccountType.INVEST, name: '黄金' },
  { genre: AccountType.PRE_PAID, name: '医保卡', net: false },
  { genre: AccountType.DEPOSIT, name: '建行储蓄卡', show: false },
  { genre: AccountType.DEPOSIT, name: '工行储蓄卡', show: false },
  { genre: AccountType.PRE_PAID, name: '公交卡', show: false },
  { genre: AccountType.VIRTUAL, name: '京东白条', show: false },
  { genre: AccountType.PRE_PAID, name: '京东卡', show: false },
  { genre: AccountType.PRE_PAID, name: '武商卡', show: false },
  { genre: AccountType.PRE_PAID, name: '永和卡', show: false },
  { genre: AccountType.INVEST, name: '余额+', show: false },
  { genre: AccountType.INVEST, name: '招财宝', show: false },
  { genre: AccountType.VIRTUAL, name: '支付宝', show: false },
  { genre: AccountType.VIRTUAL, name: '支付宝花呗', show: false },
];

const categories: CreationAttributes<Category>[] = [
  { type: CategoryType.INCOME, name: '闲置' },
  { type: CategoryType.INCOME, name: '黄金' },
  { type: CategoryType.INCOME, name: '工资薪水' },
  { type: CategoryType.INCOME, name: '利息' },
  { type: CategoryType.INCOME, name: '兼职外快' },
  { type: CategoryType.INCOME, name: '营业收入' },
  { type: CategoryType.INCOME, name: '红包' },
  { type: CategoryType.INCOME, name: '销售款' },
  { type: CategoryType.INCOME, name: '退款返款' },
  { type: CategoryType.INCOME, name: '报销款' },
  { type: CategoryType.INCOME, name: '福利补贴' },
  { type: CategoryType.INCOME, name: '余额宝' },
  { type: CategoryType.INCOME, name: '应收款' },
  { type: CategoryType.INCOME, name: '生活费' },
  { type: CategoryType.INCOME, name: '奖金' },
  { type: CategoryType.INCOME, name: '基金' },
  { type: CategoryType.INCOME, name: '礼金' },
  { type: CategoryType.INCOME, name: '分红' },
  { type: CategoryType.INCOME, name: '租金' },
  { type: CategoryType.INCOME, name: '股票' },
  { type: CategoryType.INCOME, name: '公积金' },
  { type: CategoryType.INCOME, name: '工程款' },
  { type: CategoryType.INCOME, name: '赔付款' },
  { type: CategoryType.INCOME, name: '漏记款' },
  { type: CategoryType.INCOME, name: '其他' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '早餐' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '午餐' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '晚餐' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '夜宵' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '零食' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '饮料水果' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '买菜原料' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '油盐酱醋' },
  { type: CategoryType.OUTCOME, name: '餐饮', subName: '餐饮其他' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '公共交通' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '打车' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '公交' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '加油' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '停车费' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '地铁' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '火车' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '长途汽车' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '飞机' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '自行车' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '船舶' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '保养维修' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '过路过桥' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '罚款赔偿' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '车款车贷' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '车险' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '驾照费用' },
  { type: CategoryType.OUTCOME, name: '交通', subName: '交通其他' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '服饰鞋包' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '家居百货' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '宝宝用品' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '化妆护肤' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '烟酒' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '电子数码' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '文具玩具' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '报刊书籍' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '珠宝首饰' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '家具家纺' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '保健用品' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '电器' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '摄影文印' },
  { type: CategoryType.OUTCOME, name: '购物', subName: '购物其他' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '旅游度假' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '电影' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '网游电玩' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '麻将棋牌' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '洗浴足浴' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '运动健身' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '花鸟宠物' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '聚会玩乐' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '茶酒咖啡' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '卡拉OK' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '歌舞演出' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '电视' },
  { type: CategoryType.OUTCOME, name: '娱乐', subName: '娱乐其他' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '医疗药品' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '挂号门诊' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '养生保健' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '住院费' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '养老院' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '学杂教材' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '培训考试' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '幼儿教育' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '学费' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '家教补习' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '出国留学' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '助学贷款' },
  { type: CategoryType.OUTCOME, name: '医教', subName: '医教其他' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '装修款' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '维修' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '手续费' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '手机电话' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '水电燃气' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '生活费' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '美发美容' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '住宿房租' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '材料建材' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '房款房贷' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '快递邮政' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '电脑宽带' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '家政服务' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '物业' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '税费手续费' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '保险费' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '消费贷款' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '婚庆摄影' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '漏记款' },
  { type: CategoryType.OUTCOME, name: '居家', subName: '生活其他' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '彩票' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '利息支出' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '保险' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '出资' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '基金' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '股票' },
  { type: CategoryType.OUTCOME, name: '投资', subName: 'P2P' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '余额宝' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '理财产品' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '投资贷款' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '银行存款' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '证券期货' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '外汇' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '贵金属' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '收藏品' },
  { type: CategoryType.OUTCOME, name: '投资', subName: '投资其他' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '餐饮' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '礼金红包' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '物品' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '孝敬' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '请客' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '给予' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '代付款' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '慈善捐款' },
  { type: CategoryType.OUTCOME, name: '人情', subName: '人情其他' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '进货采购' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '人工支出' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '材料辅料' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '办公费用' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '交通运输' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '工程付款' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '运营费' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '会务费' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '营销广告' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '店面租金' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '注册登记' },
  { type: CategoryType.OUTCOME, name: '生意', subName: '生意其他' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '百货' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '家装建材' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '厨房卫浴' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '灯具照明' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '家具' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '家电' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '配饰' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '五金电子' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '人工费' },
  { type: CategoryType.OUTCOME, name: '装修', subName: '设计费' },
  { type: CategoryType.TRANSFER, name: '转账' },
];

const labels: CreationAttributes<Label>[] = [{ name: '日常' }, { name: '房产' }, { name: '装修' }];

const waterfalls: CreationAttributes<Waterfall>[] = [
  { type: CategoryType.INCOME, aid: 1, cid: 1, lid: 1, income: 100000.01 },
  { type: CategoryType.INCOME, aid: 1, cid: 1, lid: 1, income: 100000.02 },
];

export const seeds = { accounts, categories, labels, waterfalls };

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
    await initDB(true);

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
