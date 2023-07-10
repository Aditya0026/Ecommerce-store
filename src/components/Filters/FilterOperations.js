function getSortedData(productData, state) {
  if (!state) {
    return productData;
  }
  if (state === 'latest') {
    return productData.filter((product) => product.latest);
  }
  return [...productData].sort((a, b) =>
    state === 'low to high' ? a.price - b.price : b.price - a.price
  );
}

function filterByEachCategory(products, category, filterBy) {
  return products.filter((product) => {
    if (!filterBy[category].length) {
      return true;
    }
    return filterBy[category].includes(product[category]);
  });
}

function getFilteredData(state, filterObj) {
  const res = Object.keys(filterObj).reduce(
    (filteredProducts, category) =>
      filterByEachCategory(filteredProducts, category, state.filterBy),
    state.productsList
  );
  console.log(res, 'zzzz');
  return res;
}

function getPricesData(products, priceState) {
  if (priceState === 0) {
    return products;
  }
  return products.filter((product) => product.price <= priceState);
}
export { getSortedData, getFilteredData, getPricesData };
