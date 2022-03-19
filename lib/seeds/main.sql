/*
 Navicat Premium Data Transfer

 Source Server         : cai.sqlite
 Source Server Type    : SQLite
 Source Server Version : 3030001
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3030001
 File Encoding         : 65001

 Date: 19/03/2022 16:22:42
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS "accounts";
CREATE TABLE `accounts` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `createdAt` DATETIME, `updatedAt` DATETIME, `genre` VARCHAR(255) DEFAULT '虚拟', `name` VARCHAR(255) NOT NULL, `show` TINYINT(1) DEFAULT 1, `net` TINYINT(1) DEFAULT 1, `credit` TINYINT(1) DEFAULT 0, `limit` DECIMAL(12,2), `billDay` TINYINT, `dueDay` TINYINT, `sort` SMALLINT);

-- ----------------------------
-- Records of accounts
-- ----------------------------
BEGIN;
INSERT INTO "accounts" VALUES (1, '2022-03-19 08:21:59.298 +00:00', '2022-03-19 08:21:59.298 +00:00', '现金', '现金', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (2, '2022-03-19 08:21:59.302 +00:00', '2022-03-19 08:21:59.302 +00:00', '信用卡', '招行信用卡', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (3, '2022-03-19 08:21:59.305 +00:00', '2022-03-19 08:21:59.305 +00:00', '信用卡', '交通银行信用卡', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (4, '2022-03-19 08:21:59.307 +00:00', '2022-03-19 08:21:59.307 +00:00', '信用卡', '中国银行信用卡', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (5, '2022-03-19 08:21:59.310 +00:00', '2022-03-19 08:21:59.310 +00:00', '储蓄卡', '招行储蓄卡', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (6, '2022-03-19 08:21:59.312 +00:00', '2022-03-19 08:21:59.312 +00:00', '储蓄卡', '交行储蓄卡', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (7, '2022-03-19 08:21:59.314 +00:00', '2022-03-19 08:21:59.314 +00:00', '投资账户', '余额宝', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (8, '2022-03-19 08:21:59.316 +00:00', '2022-03-19 08:21:59.316 +00:00', '投资账户', '招行理财', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (9, '2022-03-19 08:21:59.319 +00:00', '2022-03-19 08:21:59.319 +00:00', '投资账户', '定期', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (10, '2022-03-19 08:21:59.321 +00:00', '2022-03-19 08:21:59.321 +00:00', '投资账户', '基金', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (11, '2022-03-19 08:21:59.322 +00:00', '2022-03-19 08:21:59.322 +00:00', '投资账户', '黄金', 1, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (12, '2022-03-19 08:21:59.324 +00:00', '2022-03-19 08:21:59.324 +00:00', '储值卡', '医保卡', 1, 0, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (13, '2022-03-19 08:21:59.326 +00:00', '2022-03-19 08:21:59.326 +00:00', '储蓄卡', '建行储蓄卡', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (14, '2022-03-19 08:21:59.328 +00:00', '2022-03-19 08:21:59.328 +00:00', '储蓄卡', '工行储蓄卡', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (15, '2022-03-19 08:21:59.329 +00:00', '2022-03-19 08:21:59.329 +00:00', '储值卡', '公交卡', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (16, '2022-03-19 08:21:59.331 +00:00', '2022-03-19 08:21:59.331 +00:00', '虚拟', '京东白条', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (17, '2022-03-19 08:21:59.333 +00:00', '2022-03-19 08:21:59.333 +00:00', '储值卡', '京东卡', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (18, '2022-03-19 08:21:59.335 +00:00', '2022-03-19 08:21:59.335 +00:00', '储值卡', '武商卡', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (19, '2022-03-19 08:21:59.337 +00:00', '2022-03-19 08:21:59.337 +00:00', '储值卡', '永和卡', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (20, '2022-03-19 08:21:59.338 +00:00', '2022-03-19 08:21:59.338 +00:00', '投资账户', '余额+', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (21, '2022-03-19 08:21:59.340 +00:00', '2022-03-19 08:21:59.340 +00:00', '投资账户', '招财宝', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (22, '2022-03-19 08:21:59.341 +00:00', '2022-03-19 08:21:59.341 +00:00', '虚拟', '支付宝', 0, 1, 0, NULL, NULL, NULL, NULL);
INSERT INTO "accounts" VALUES (23, '2022-03-19 08:21:59.342 +00:00', '2022-03-19 08:21:59.342 +00:00', '虚拟', '支付宝花呗', 0, 1, 0, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS "categories";
CREATE TABLE `categories` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `createdAt` DATETIME, `updatedAt` DATETIME, `name` VARCHAR(255) NOT NULL, `subName` VARCHAR(255), `type` TINYINT NOT NULL, `sort` SMALLINT);

-- ----------------------------
-- Records of categories
-- ----------------------------
BEGIN;
INSERT INTO "categories" VALUES (1, '2022-03-19 08:21:59.344 +00:00', '2022-03-19 08:21:59.344 +00:00', '闲置', NULL, 0, NULL);
INSERT INTO "categories" VALUES (2, '2022-03-19 08:21:59.346 +00:00', '2022-03-19 08:21:59.346 +00:00', '黄金', NULL, 0, NULL);
INSERT INTO "categories" VALUES (3, '2022-03-19 08:21:59.348 +00:00', '2022-03-19 08:21:59.348 +00:00', '工资薪水', NULL, 0, NULL);
INSERT INTO "categories" VALUES (4, '2022-03-19 08:21:59.349 +00:00', '2022-03-19 08:21:59.349 +00:00', '利息', NULL, 0, NULL);
INSERT INTO "categories" VALUES (5, '2022-03-19 08:21:59.351 +00:00', '2022-03-19 08:21:59.351 +00:00', '兼职外快', NULL, 0, NULL);
INSERT INTO "categories" VALUES (6, '2022-03-19 08:21:59.353 +00:00', '2022-03-19 08:21:59.353 +00:00', '营业收入', NULL, 0, NULL);
INSERT INTO "categories" VALUES (7, '2022-03-19 08:21:59.354 +00:00', '2022-03-19 08:21:59.354 +00:00', '红包', NULL, 0, NULL);
INSERT INTO "categories" VALUES (8, '2022-03-19 08:21:59.355 +00:00', '2022-03-19 08:21:59.355 +00:00', '销售款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (9, '2022-03-19 08:21:59.356 +00:00', '2022-03-19 08:21:59.356 +00:00', '退款返款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (10, '2022-03-19 08:21:59.358 +00:00', '2022-03-19 08:21:59.358 +00:00', '报销款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (11, '2022-03-19 08:21:59.359 +00:00', '2022-03-19 08:21:59.359 +00:00', '福利补贴', NULL, 0, NULL);
INSERT INTO "categories" VALUES (12, '2022-03-19 08:21:59.360 +00:00', '2022-03-19 08:21:59.360 +00:00', '余额宝', NULL, 0, NULL);
INSERT INTO "categories" VALUES (13, '2022-03-19 08:21:59.361 +00:00', '2022-03-19 08:21:59.361 +00:00', '应收款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (14, '2022-03-19 08:21:59.363 +00:00', '2022-03-19 08:21:59.363 +00:00', '生活费', NULL, 0, NULL);
INSERT INTO "categories" VALUES (15, '2022-03-19 08:21:59.364 +00:00', '2022-03-19 08:21:59.364 +00:00', '奖金', NULL, 0, NULL);
INSERT INTO "categories" VALUES (16, '2022-03-19 08:21:59.366 +00:00', '2022-03-19 08:21:59.366 +00:00', '基金', NULL, 0, NULL);
INSERT INTO "categories" VALUES (17, '2022-03-19 08:21:59.368 +00:00', '2022-03-19 08:21:59.368 +00:00', '礼金', NULL, 0, NULL);
INSERT INTO "categories" VALUES (18, '2022-03-19 08:21:59.369 +00:00', '2022-03-19 08:21:59.369 +00:00', '分红', NULL, 0, NULL);
INSERT INTO "categories" VALUES (19, '2022-03-19 08:21:59.370 +00:00', '2022-03-19 08:21:59.370 +00:00', '租金', NULL, 0, NULL);
INSERT INTO "categories" VALUES (20, '2022-03-19 08:21:59.372 +00:00', '2022-03-19 08:21:59.372 +00:00', '股票', NULL, 0, NULL);
INSERT INTO "categories" VALUES (21, '2022-03-19 08:21:59.373 +00:00', '2022-03-19 08:21:59.373 +00:00', '公积金', NULL, 0, NULL);
INSERT INTO "categories" VALUES (22, '2022-03-19 08:21:59.374 +00:00', '2022-03-19 08:21:59.374 +00:00', '工程款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (23, '2022-03-19 08:21:59.375 +00:00', '2022-03-19 08:21:59.375 +00:00', '赔付款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (24, '2022-03-19 08:21:59.377 +00:00', '2022-03-19 08:21:59.377 +00:00', '漏记款', NULL, 0, NULL);
INSERT INTO "categories" VALUES (25, '2022-03-19 08:21:59.378 +00:00', '2022-03-19 08:21:59.378 +00:00', '其他', NULL, 0, NULL);
INSERT INTO "categories" VALUES (26, '2022-03-19 08:21:59.379 +00:00', '2022-03-19 08:21:59.379 +00:00', '餐饮', '早餐', 1, NULL);
INSERT INTO "categories" VALUES (27, '2022-03-19 08:21:59.380 +00:00', '2022-03-19 08:21:59.380 +00:00', '餐饮', '午餐', 1, NULL);
INSERT INTO "categories" VALUES (28, '2022-03-19 08:21:59.382 +00:00', '2022-03-19 08:21:59.382 +00:00', '餐饮', '晚餐', 1, NULL);
INSERT INTO "categories" VALUES (29, '2022-03-19 08:21:59.383 +00:00', '2022-03-19 08:21:59.383 +00:00', '餐饮', '夜宵', 1, NULL);
INSERT INTO "categories" VALUES (30, '2022-03-19 08:21:59.385 +00:00', '2022-03-19 08:21:59.385 +00:00', '餐饮', '零食', 1, NULL);
INSERT INTO "categories" VALUES (31, '2022-03-19 08:21:59.390 +00:00', '2022-03-19 08:21:59.390 +00:00', '餐饮', '饮料水果', 1, NULL);
INSERT INTO "categories" VALUES (32, '2022-03-19 08:21:59.393 +00:00', '2022-03-19 08:21:59.393 +00:00', '餐饮', '买菜原料', 1, NULL);
INSERT INTO "categories" VALUES (33, '2022-03-19 08:21:59.395 +00:00', '2022-03-19 08:21:59.395 +00:00', '餐饮', '油盐酱醋', 1, NULL);
INSERT INTO "categories" VALUES (34, '2022-03-19 08:21:59.397 +00:00', '2022-03-19 08:21:59.397 +00:00', '餐饮', '餐饮其他', 1, NULL);
INSERT INTO "categories" VALUES (35, '2022-03-19 08:21:59.399 +00:00', '2022-03-19 08:21:59.399 +00:00', '交通', '公共交通', 1, NULL);
INSERT INTO "categories" VALUES (36, '2022-03-19 08:21:59.401 +00:00', '2022-03-19 08:21:59.401 +00:00', '交通', '打车', 1, NULL);
INSERT INTO "categories" VALUES (37, '2022-03-19 08:21:59.403 +00:00', '2022-03-19 08:21:59.403 +00:00', '交通', '公交', 1, NULL);
INSERT INTO "categories" VALUES (38, '2022-03-19 08:21:59.405 +00:00', '2022-03-19 08:21:59.405 +00:00', '交通', '加油', 1, NULL);
INSERT INTO "categories" VALUES (39, '2022-03-19 08:21:59.407 +00:00', '2022-03-19 08:21:59.407 +00:00', '交通', '停车费', 1, NULL);
INSERT INTO "categories" VALUES (40, '2022-03-19 08:21:59.408 +00:00', '2022-03-19 08:21:59.408 +00:00', '交通', '地铁', 1, NULL);
INSERT INTO "categories" VALUES (41, '2022-03-19 08:21:59.410 +00:00', '2022-03-19 08:21:59.410 +00:00', '交通', '火车', 1, NULL);
INSERT INTO "categories" VALUES (42, '2022-03-19 08:21:59.411 +00:00', '2022-03-19 08:21:59.411 +00:00', '交通', '长途汽车', 1, NULL);
INSERT INTO "categories" VALUES (43, '2022-03-19 08:21:59.412 +00:00', '2022-03-19 08:21:59.412 +00:00', '交通', '飞机', 1, NULL);
INSERT INTO "categories" VALUES (44, '2022-03-19 08:21:59.414 +00:00', '2022-03-19 08:21:59.414 +00:00', '交通', '自行车', 1, NULL);
INSERT INTO "categories" VALUES (45, '2022-03-19 08:21:59.416 +00:00', '2022-03-19 08:21:59.416 +00:00', '交通', '船舶', 1, NULL);
INSERT INTO "categories" VALUES (46, '2022-03-19 08:21:59.418 +00:00', '2022-03-19 08:21:59.418 +00:00', '交通', '保养维修', 1, NULL);
INSERT INTO "categories" VALUES (47, '2022-03-19 08:21:59.420 +00:00', '2022-03-19 08:21:59.420 +00:00', '交通', '过路过桥', 1, NULL);
INSERT INTO "categories" VALUES (48, '2022-03-19 08:21:59.421 +00:00', '2022-03-19 08:21:59.421 +00:00', '交通', '罚款赔偿', 1, NULL);
INSERT INTO "categories" VALUES (49, '2022-03-19 08:21:59.422 +00:00', '2022-03-19 08:21:59.422 +00:00', '交通', '车款车贷', 1, NULL);
INSERT INTO "categories" VALUES (50, '2022-03-19 08:21:59.424 +00:00', '2022-03-19 08:21:59.424 +00:00', '交通', '车险', 1, NULL);
INSERT INTO "categories" VALUES (51, '2022-03-19 08:21:59.425 +00:00', '2022-03-19 08:21:59.425 +00:00', '交通', '驾照费用', 1, NULL);
INSERT INTO "categories" VALUES (52, '2022-03-19 08:21:59.426 +00:00', '2022-03-19 08:21:59.426 +00:00', '交通', '交通其他', 1, NULL);
INSERT INTO "categories" VALUES (53, '2022-03-19 08:21:59.427 +00:00', '2022-03-19 08:21:59.427 +00:00', '购物', '服饰鞋包', 1, NULL);
INSERT INTO "categories" VALUES (54, '2022-03-19 08:21:59.429 +00:00', '2022-03-19 08:21:59.429 +00:00', '购物', '家居百货', 1, NULL);
INSERT INTO "categories" VALUES (55, '2022-03-19 08:21:59.430 +00:00', '2022-03-19 08:21:59.430 +00:00', '购物', '宝宝用品', 1, NULL);
INSERT INTO "categories" VALUES (56, '2022-03-19 08:21:59.431 +00:00', '2022-03-19 08:21:59.431 +00:00', '购物', '化妆护肤', 1, NULL);
INSERT INTO "categories" VALUES (57, '2022-03-19 08:21:59.433 +00:00', '2022-03-19 08:21:59.433 +00:00', '购物', '烟酒', 1, NULL);
INSERT INTO "categories" VALUES (58, '2022-03-19 08:21:59.434 +00:00', '2022-03-19 08:21:59.434 +00:00', '购物', '电子数码', 1, NULL);
INSERT INTO "categories" VALUES (59, '2022-03-19 08:21:59.436 +00:00', '2022-03-19 08:21:59.436 +00:00', '购物', '文具玩具', 1, NULL);
INSERT INTO "categories" VALUES (60, '2022-03-19 08:21:59.437 +00:00', '2022-03-19 08:21:59.437 +00:00', '购物', '报刊书籍', 1, NULL);
INSERT INTO "categories" VALUES (61, '2022-03-19 08:21:59.438 +00:00', '2022-03-19 08:21:59.438 +00:00', '购物', '珠宝首饰', 1, NULL);
INSERT INTO "categories" VALUES (62, '2022-03-19 08:21:59.439 +00:00', '2022-03-19 08:21:59.439 +00:00', '购物', '家具家纺', 1, NULL);
INSERT INTO "categories" VALUES (63, '2022-03-19 08:21:59.441 +00:00', '2022-03-19 08:21:59.441 +00:00', '购物', '保健用品', 1, NULL);
INSERT INTO "categories" VALUES (64, '2022-03-19 08:21:59.442 +00:00', '2022-03-19 08:21:59.442 +00:00', '购物', '电器', 1, NULL);
INSERT INTO "categories" VALUES (65, '2022-03-19 08:21:59.443 +00:00', '2022-03-19 08:21:59.443 +00:00', '购物', '摄影文印', 1, NULL);
INSERT INTO "categories" VALUES (66, '2022-03-19 08:21:59.444 +00:00', '2022-03-19 08:21:59.444 +00:00', '购物', '购物其他', 1, NULL);
INSERT INTO "categories" VALUES (67, '2022-03-19 08:21:59.446 +00:00', '2022-03-19 08:21:59.446 +00:00', '娱乐', '旅游度假', 1, NULL);
INSERT INTO "categories" VALUES (68, '2022-03-19 08:21:59.447 +00:00', '2022-03-19 08:21:59.447 +00:00', '娱乐', '电影', 1, NULL);
INSERT INTO "categories" VALUES (69, '2022-03-19 08:21:59.448 +00:00', '2022-03-19 08:21:59.448 +00:00', '娱乐', '网游电玩', 1, NULL);
INSERT INTO "categories" VALUES (70, '2022-03-19 08:21:59.449 +00:00', '2022-03-19 08:21:59.449 +00:00', '娱乐', '麻将棋牌', 1, NULL);
INSERT INTO "categories" VALUES (71, '2022-03-19 08:21:59.450 +00:00', '2022-03-19 08:21:59.450 +00:00', '娱乐', '洗浴足浴', 1, NULL);
INSERT INTO "categories" VALUES (72, '2022-03-19 08:21:59.452 +00:00', '2022-03-19 08:21:59.452 +00:00', '娱乐', '运动健身', 1, NULL);
INSERT INTO "categories" VALUES (73, '2022-03-19 08:21:59.453 +00:00', '2022-03-19 08:21:59.453 +00:00', '娱乐', '花鸟宠物', 1, NULL);
INSERT INTO "categories" VALUES (74, '2022-03-19 08:21:59.454 +00:00', '2022-03-19 08:21:59.454 +00:00', '娱乐', '聚会玩乐', 1, NULL);
INSERT INTO "categories" VALUES (75, '2022-03-19 08:21:59.456 +00:00', '2022-03-19 08:21:59.456 +00:00', '娱乐', '茶酒咖啡', 1, NULL);
INSERT INTO "categories" VALUES (76, '2022-03-19 08:21:59.457 +00:00', '2022-03-19 08:21:59.457 +00:00', '娱乐', '卡拉OK', 1, NULL);
INSERT INTO "categories" VALUES (77, '2022-03-19 08:21:59.458 +00:00', '2022-03-19 08:21:59.458 +00:00', '娱乐', '歌舞演出', 1, NULL);
INSERT INTO "categories" VALUES (78, '2022-03-19 08:21:59.461 +00:00', '2022-03-19 08:21:59.461 +00:00', '娱乐', '电视', 1, NULL);
INSERT INTO "categories" VALUES (79, '2022-03-19 08:21:59.462 +00:00', '2022-03-19 08:21:59.462 +00:00', '娱乐', '娱乐其他', 1, NULL);
INSERT INTO "categories" VALUES (80, '2022-03-19 08:21:59.463 +00:00', '2022-03-19 08:21:59.463 +00:00', '医教', '医疗药品', 1, NULL);
INSERT INTO "categories" VALUES (81, '2022-03-19 08:21:59.465 +00:00', '2022-03-19 08:21:59.465 +00:00', '医教', '挂号门诊', 1, NULL);
INSERT INTO "categories" VALUES (82, '2022-03-19 08:21:59.466 +00:00', '2022-03-19 08:21:59.466 +00:00', '医教', '养生保健', 1, NULL);
INSERT INTO "categories" VALUES (83, '2022-03-19 08:21:59.468 +00:00', '2022-03-19 08:21:59.468 +00:00', '医教', '住院费', 1, NULL);
INSERT INTO "categories" VALUES (84, '2022-03-19 08:21:59.469 +00:00', '2022-03-19 08:21:59.469 +00:00', '医教', '养老院', 1, NULL);
INSERT INTO "categories" VALUES (85, '2022-03-19 08:21:59.471 +00:00', '2022-03-19 08:21:59.471 +00:00', '医教', '学杂教材', 1, NULL);
INSERT INTO "categories" VALUES (86, '2022-03-19 08:21:59.472 +00:00', '2022-03-19 08:21:59.472 +00:00', '医教', '培训考试', 1, NULL);
INSERT INTO "categories" VALUES (87, '2022-03-19 08:21:59.474 +00:00', '2022-03-19 08:21:59.474 +00:00', '医教', '幼儿教育', 1, NULL);
INSERT INTO "categories" VALUES (88, '2022-03-19 08:21:59.479 +00:00', '2022-03-19 08:21:59.479 +00:00', '医教', '学费', 1, NULL);
INSERT INTO "categories" VALUES (89, '2022-03-19 08:21:59.481 +00:00', '2022-03-19 08:21:59.481 +00:00', '医教', '家教补习', 1, NULL);
INSERT INTO "categories" VALUES (90, '2022-03-19 08:21:59.483 +00:00', '2022-03-19 08:21:59.483 +00:00', '医教', '出国留学', 1, NULL);
INSERT INTO "categories" VALUES (91, '2022-03-19 08:21:59.484 +00:00', '2022-03-19 08:21:59.484 +00:00', '医教', '助学贷款', 1, NULL);
INSERT INTO "categories" VALUES (92, '2022-03-19 08:21:59.486 +00:00', '2022-03-19 08:21:59.486 +00:00', '医教', '医教其他', 1, NULL);
INSERT INTO "categories" VALUES (93, '2022-03-19 08:21:59.488 +00:00', '2022-03-19 08:21:59.488 +00:00', '居家', '装修款', 1, NULL);
INSERT INTO "categories" VALUES (94, '2022-03-19 08:21:59.489 +00:00', '2022-03-19 08:21:59.489 +00:00', '居家', '维修', 1, NULL);
INSERT INTO "categories" VALUES (95, '2022-03-19 08:21:59.490 +00:00', '2022-03-19 08:21:59.490 +00:00', '居家', '手续费', 1, NULL);
INSERT INTO "categories" VALUES (96, '2022-03-19 08:21:59.491 +00:00', '2022-03-19 08:21:59.491 +00:00', '居家', '手机电话', 1, NULL);
INSERT INTO "categories" VALUES (97, '2022-03-19 08:21:59.493 +00:00', '2022-03-19 08:21:59.493 +00:00', '居家', '水电燃气', 1, NULL);
INSERT INTO "categories" VALUES (98, '2022-03-19 08:21:59.494 +00:00', '2022-03-19 08:21:59.494 +00:00', '居家', '生活费', 1, NULL);
INSERT INTO "categories" VALUES (99, '2022-03-19 08:21:59.495 +00:00', '2022-03-19 08:21:59.495 +00:00', '居家', '美发美容', 1, NULL);
INSERT INTO "categories" VALUES (100, '2022-03-19 08:21:59.497 +00:00', '2022-03-19 08:21:59.497 +00:00', '居家', '住宿房租', 1, NULL);
INSERT INTO "categories" VALUES (101, '2022-03-19 08:21:59.498 +00:00', '2022-03-19 08:21:59.498 +00:00', '居家', '材料建材', 1, NULL);
INSERT INTO "categories" VALUES (102, '2022-03-19 08:21:59.499 +00:00', '2022-03-19 08:21:59.499 +00:00', '居家', '房款房贷', 1, NULL);
INSERT INTO "categories" VALUES (103, '2022-03-19 08:21:59.501 +00:00', '2022-03-19 08:21:59.501 +00:00', '居家', '快递邮政', 1, NULL);
INSERT INTO "categories" VALUES (104, '2022-03-19 08:21:59.502 +00:00', '2022-03-19 08:21:59.502 +00:00', '居家', '电脑宽带', 1, NULL);
INSERT INTO "categories" VALUES (105, '2022-03-19 08:21:59.504 +00:00', '2022-03-19 08:21:59.504 +00:00', '居家', '家政服务', 1, NULL);
INSERT INTO "categories" VALUES (106, '2022-03-19 08:21:59.505 +00:00', '2022-03-19 08:21:59.505 +00:00', '居家', '物业', 1, NULL);
INSERT INTO "categories" VALUES (107, '2022-03-19 08:21:59.506 +00:00', '2022-03-19 08:21:59.506 +00:00', '居家', '税费手续费', 1, NULL);
INSERT INTO "categories" VALUES (108, '2022-03-19 08:21:59.508 +00:00', '2022-03-19 08:21:59.508 +00:00', '居家', '保险费', 1, NULL);
INSERT INTO "categories" VALUES (109, '2022-03-19 08:21:59.509 +00:00', '2022-03-19 08:21:59.509 +00:00', '居家', '消费贷款', 1, NULL);
INSERT INTO "categories" VALUES (110, '2022-03-19 08:21:59.510 +00:00', '2022-03-19 08:21:59.510 +00:00', '居家', '婚庆摄影', 1, NULL);
INSERT INTO "categories" VALUES (111, '2022-03-19 08:21:59.512 +00:00', '2022-03-19 08:21:59.512 +00:00', '居家', '漏记款', 1, NULL);
INSERT INTO "categories" VALUES (112, '2022-03-19 08:21:59.514 +00:00', '2022-03-19 08:21:59.514 +00:00', '居家', '生活其他', 1, NULL);
INSERT INTO "categories" VALUES (113, '2022-03-19 08:21:59.515 +00:00', '2022-03-19 08:21:59.515 +00:00', '投资', '彩票', 1, NULL);
INSERT INTO "categories" VALUES (114, '2022-03-19 08:21:59.517 +00:00', '2022-03-19 08:21:59.517 +00:00', '投资', '利息支出', 1, NULL);
INSERT INTO "categories" VALUES (115, '2022-03-19 08:21:59.519 +00:00', '2022-03-19 08:21:59.519 +00:00', '投资', '保险', 1, NULL);
INSERT INTO "categories" VALUES (116, '2022-03-19 08:21:59.520 +00:00', '2022-03-19 08:21:59.520 +00:00', '投资', '出资', 1, NULL);
INSERT INTO "categories" VALUES (117, '2022-03-19 08:21:59.521 +00:00', '2022-03-19 08:21:59.521 +00:00', '投资', '基金', 1, NULL);
INSERT INTO "categories" VALUES (118, '2022-03-19 08:21:59.523 +00:00', '2022-03-19 08:21:59.523 +00:00', '投资', '股票', 1, NULL);
INSERT INTO "categories" VALUES (119, '2022-03-19 08:21:59.524 +00:00', '2022-03-19 08:21:59.524 +00:00', '投资', 'P2P', 1, NULL);
INSERT INTO "categories" VALUES (120, '2022-03-19 08:21:59.525 +00:00', '2022-03-19 08:21:59.525 +00:00', '投资', '余额宝', 1, NULL);
INSERT INTO "categories" VALUES (121, '2022-03-19 08:21:59.526 +00:00', '2022-03-19 08:21:59.526 +00:00', '投资', '理财产品', 1, NULL);
INSERT INTO "categories" VALUES (122, '2022-03-19 08:21:59.528 +00:00', '2022-03-19 08:21:59.528 +00:00', '投资', '投资贷款', 1, NULL);
INSERT INTO "categories" VALUES (123, '2022-03-19 08:21:59.529 +00:00', '2022-03-19 08:21:59.529 +00:00', '投资', '银行存款', 1, NULL);
INSERT INTO "categories" VALUES (124, '2022-03-19 08:21:59.530 +00:00', '2022-03-19 08:21:59.530 +00:00', '投资', '证券期货', 1, NULL);
INSERT INTO "categories" VALUES (125, '2022-03-19 08:21:59.532 +00:00', '2022-03-19 08:21:59.532 +00:00', '投资', '外汇', 1, NULL);
INSERT INTO "categories" VALUES (126, '2022-03-19 08:21:59.533 +00:00', '2022-03-19 08:21:59.533 +00:00', '投资', '贵金属', 1, NULL);
INSERT INTO "categories" VALUES (127, '2022-03-19 08:21:59.535 +00:00', '2022-03-19 08:21:59.535 +00:00', '投资', '收藏品', 1, NULL);
INSERT INTO "categories" VALUES (128, '2022-03-19 08:21:59.537 +00:00', '2022-03-19 08:21:59.537 +00:00', '投资', '投资其他', 1, NULL);
INSERT INTO "categories" VALUES (129, '2022-03-19 08:21:59.538 +00:00', '2022-03-19 08:21:59.538 +00:00', '人情', '餐饮', 1, NULL);
INSERT INTO "categories" VALUES (130, '2022-03-19 08:21:59.539 +00:00', '2022-03-19 08:21:59.539 +00:00', '人情', '礼金红包', 1, NULL);
INSERT INTO "categories" VALUES (131, '2022-03-19 08:21:59.541 +00:00', '2022-03-19 08:21:59.541 +00:00', '人情', '物品', 1, NULL);
INSERT INTO "categories" VALUES (132, '2022-03-19 08:21:59.542 +00:00', '2022-03-19 08:21:59.542 +00:00', '人情', '孝敬', 1, NULL);
INSERT INTO "categories" VALUES (133, '2022-03-19 08:21:59.543 +00:00', '2022-03-19 08:21:59.543 +00:00', '人情', '请客', 1, NULL);
INSERT INTO "categories" VALUES (134, '2022-03-19 08:21:59.544 +00:00', '2022-03-19 08:21:59.544 +00:00', '人情', '给予', 1, NULL);
INSERT INTO "categories" VALUES (135, '2022-03-19 08:21:59.545 +00:00', '2022-03-19 08:21:59.545 +00:00', '人情', '代付款', 1, NULL);
INSERT INTO "categories" VALUES (136, '2022-03-19 08:21:59.547 +00:00', '2022-03-19 08:21:59.547 +00:00', '人情', '慈善捐款', 1, NULL);
INSERT INTO "categories" VALUES (137, '2022-03-19 08:21:59.548 +00:00', '2022-03-19 08:21:59.548 +00:00', '人情', '人情其他', 1, NULL);
INSERT INTO "categories" VALUES (138, '2022-03-19 08:21:59.549 +00:00', '2022-03-19 08:21:59.549 +00:00', '生意', '进货采购', 1, NULL);
INSERT INTO "categories" VALUES (139, '2022-03-19 08:21:59.550 +00:00', '2022-03-19 08:21:59.550 +00:00', '生意', '人工支出', 1, NULL);
INSERT INTO "categories" VALUES (140, '2022-03-19 08:21:59.552 +00:00', '2022-03-19 08:21:59.552 +00:00', '生意', '材料辅料', 1, NULL);
INSERT INTO "categories" VALUES (141, '2022-03-19 08:21:59.553 +00:00', '2022-03-19 08:21:59.553 +00:00', '生意', '办公费用', 1, NULL);
INSERT INTO "categories" VALUES (142, '2022-03-19 08:21:59.554 +00:00', '2022-03-19 08:21:59.554 +00:00', '生意', '交通运输', 1, NULL);
INSERT INTO "categories" VALUES (143, '2022-03-19 08:21:59.555 +00:00', '2022-03-19 08:21:59.555 +00:00', '生意', '工程付款', 1, NULL);
INSERT INTO "categories" VALUES (144, '2022-03-19 08:21:59.557 +00:00', '2022-03-19 08:21:59.557 +00:00', '生意', '运营费', 1, NULL);
INSERT INTO "categories" VALUES (145, '2022-03-19 08:21:59.558 +00:00', '2022-03-19 08:21:59.558 +00:00', '生意', '会务费', 1, NULL);
INSERT INTO "categories" VALUES (146, '2022-03-19 08:21:59.559 +00:00', '2022-03-19 08:21:59.559 +00:00', '生意', '营销广告', 1, NULL);
INSERT INTO "categories" VALUES (147, '2022-03-19 08:21:59.560 +00:00', '2022-03-19 08:21:59.560 +00:00', '生意', '店面租金', 1, NULL);
INSERT INTO "categories" VALUES (148, '2022-03-19 08:21:59.561 +00:00', '2022-03-19 08:21:59.561 +00:00', '生意', '注册登记', 1, NULL);
INSERT INTO "categories" VALUES (149, '2022-03-19 08:21:59.562 +00:00', '2022-03-19 08:21:59.562 +00:00', '生意', '生意其他', 1, NULL);
INSERT INTO "categories" VALUES (150, '2022-03-19 08:21:59.563 +00:00', '2022-03-19 08:21:59.563 +00:00', '装修', '百货', 1, NULL);
INSERT INTO "categories" VALUES (151, '2022-03-19 08:21:59.565 +00:00', '2022-03-19 08:21:59.565 +00:00', '装修', '家装建材', 1, NULL);
INSERT INTO "categories" VALUES (152, '2022-03-19 08:21:59.566 +00:00', '2022-03-19 08:21:59.566 +00:00', '装修', '厨房卫浴', 1, NULL);
INSERT INTO "categories" VALUES (153, '2022-03-19 08:21:59.569 +00:00', '2022-03-19 08:21:59.569 +00:00', '装修', '灯具照明', 1, NULL);
INSERT INTO "categories" VALUES (154, '2022-03-19 08:21:59.570 +00:00', '2022-03-19 08:21:59.570 +00:00', '装修', '家具', 1, NULL);
INSERT INTO "categories" VALUES (155, '2022-03-19 08:21:59.571 +00:00', '2022-03-19 08:21:59.571 +00:00', '装修', '家电', 1, NULL);
INSERT INTO "categories" VALUES (156, '2022-03-19 08:21:59.572 +00:00', '2022-03-19 08:21:59.572 +00:00', '装修', '配饰', 1, NULL);
INSERT INTO "categories" VALUES (157, '2022-03-19 08:21:59.574 +00:00', '2022-03-19 08:21:59.574 +00:00', '装修', '五金电子', 1, NULL);
INSERT INTO "categories" VALUES (158, '2022-03-19 08:21:59.575 +00:00', '2022-03-19 08:21:59.575 +00:00', '装修', '人工费', 1, NULL);
INSERT INTO "categories" VALUES (159, '2022-03-19 08:21:59.576 +00:00', '2022-03-19 08:21:59.576 +00:00', '装修', '设计费', 1, NULL);
INSERT INTO "categories" VALUES (160, '2022-03-19 08:21:59.577 +00:00', '2022-03-19 08:21:59.577 +00:00', '转账', NULL, 2, NULL);
COMMIT;

-- ----------------------------
-- Table structure for labels
-- ----------------------------
DROP TABLE IF EXISTS "labels";
CREATE TABLE `labels` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `createdAt` DATETIME, `updatedAt` DATETIME, `name` VARCHAR(255) NOT NULL, `sort` SMALLINT);

-- ----------------------------
-- Records of labels
-- ----------------------------
BEGIN;
INSERT INTO "labels" VALUES (1, '2022-03-19 08:21:59.579 +00:00', '2022-03-19 08:21:59.579 +00:00', '日常', NULL);
INSERT INTO "labels" VALUES (2, '2022-03-19 08:21:59.581 +00:00', '2022-03-19 08:21:59.581 +00:00', '房产', NULL);
INSERT INTO "labels" VALUES (3, '2022-03-19 08:21:59.582 +00:00', '2022-03-19 08:21:59.582 +00:00', '装修', NULL);
COMMIT;

-- ----------------------------
-- Table structure for sqlite_sequence
-- ----------------------------
DROP TABLE IF EXISTS "sqlite_sequence";
CREATE TABLE sqlite_sequence(name,seq);

-- ----------------------------
-- Records of sqlite_sequence
-- ----------------------------
BEGIN;
INSERT INTO "sqlite_sequence" VALUES ('accounts', 23);
INSERT INTO "sqlite_sequence" VALUES ('categories', 160);
INSERT INTO "sqlite_sequence" VALUES ('labels', 3);
INSERT INTO "sqlite_sequence" VALUES ('waterfalls', 2);
COMMIT;

-- ----------------------------
-- Table structure for waterfalls
-- ----------------------------
DROP TABLE IF EXISTS "waterfalls";
CREATE TABLE `waterfalls` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `createdAt` DATETIME, `updatedAt` DATETIME, `type` TINYINT NOT NULL, `occur` DATETIME, `income` DECIMAL(12,2) DEFAULT 0, `outcome` DECIMAL(12,2) DEFAULT 0, `aid` INTEGER NOT NULL, `cid` INTEGER NOT NULL, `lid` INTEGER NOT NULL, `uid` INTEGER, `tid` INTEGER, `ps` VARCHAR(255));

-- ----------------------------
-- Records of waterfalls
-- ----------------------------
BEGIN;
INSERT INTO "waterfalls" VALUES (1, '2022-03-19 08:21:59.584 +00:00', '2022-03-19 08:21:59.584 +00:00', 0, '2022-03-19 08:21:59.584 +00:00', 100000.01, 0, 1, 1, 1, NULL, NULL, NULL);
INSERT INTO "waterfalls" VALUES (2, '2022-03-19 08:21:59.587 +00:00', '2022-03-19 08:21:59.587 +00:00', 0, '2022-03-19 08:21:59.587 +00:00', 100000.02, 0, 1, 1, 1, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Auto increment value for accounts
-- ----------------------------
UPDATE "main"."sqlite_sequence" SET seq = 23 WHERE name = 'accounts';

-- ----------------------------
-- Auto increment value for categories
-- ----------------------------
UPDATE "main"."sqlite_sequence" SET seq = 160 WHERE name = 'categories';

-- ----------------------------
-- Auto increment value for labels
-- ----------------------------
UPDATE "main"."sqlite_sequence" SET seq = 3 WHERE name = 'labels';

-- ----------------------------
-- Auto increment value for waterfalls
-- ----------------------------
UPDATE "main"."sqlite_sequence" SET seq = 2 WHERE name = 'waterfalls';

PRAGMA foreign_keys = true;
