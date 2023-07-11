import { products } from '../../backend/db/products';

function getMaxPrice() {
  return products.reduce(
    (acc, curr) => (acc > curr.price ? acc : curr.price),
    0
  );
}

const filtersData = {
  categories: [
    ...new Set(products?.map((product) => product?.categories?.toLowerCase())),
  ],
};

const sortsData = ['high to low', 'low to high', 'latest'];

export { sortsData, filtersData, getMaxPrice };
