const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

const productDetailDao = require('./product_detail_dao');
const productSortDao = require('./product_sort_dao');
const productCategoryDao = require('./product_category_dao');
const userDao = require('./user_dao');

module.exports = {
  productDetailDao,
  productSortDao,
  productCategoryDao,
  userDao,
};
