<template>
  <ul class="products">
    <li v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </li>
  </ul>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  name: "ProductList",
  components: { ProductItem },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
/*CSS Grid Stuff*/
.products {
  list-style-type: none;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row;
}
</style>
