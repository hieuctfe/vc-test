<template>
  <div class="about">
    <ProductList v-if="productList.length" :products="productList" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import { getProducts } from "@/api/product";

export default {
  name: "Question-3",
  components: {
    ProductList,
  },
  data() {
    return {
      productList: [],
      minPrice: 500,
      maxPrice: 1500,
    };
  },
  mounted() {
    this.initProductList();
  },
  methods: {
    async initProductList() {
      const userRegion = this.$route.query.region;
      let productList = await getProducts();

      if (userRegion) {
        productList = this.filterProductListByShippableRegion(
          userRegion,
          productList
        );
      }

      productList = this.filerByPriceRange(
        this.minPrice * 100,
        this.maxPrice * 100,
        productList
      );

      // Sort price from low to high
      productList.sort(
        (a, b) => a.price.price_in_cents - b.price.price_in_cents
      );

      this.productList = productList;
    },
    filterProductListByShippableRegion(region, productList) {
      productList = productList.filter((product) =>
        product.shippable_countries.includes(region?.toUpperCase())
      );

      return productList;
    },
    filerByPriceRange(min, max, productList) {
      productList = productList.filter(
        (product) =>
          product.price.price_in_cents >= min &&
          product.price.price_in_cents <= max
      );

      return productList;
    },
  },
};
</script>
