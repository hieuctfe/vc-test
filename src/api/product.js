import { products } from "../static/products.json";

export const getProducts = () => {
  let productData = JSON.parse(JSON.stringify(products));

  return Promise.resolve(productData);
};
