<template>
  <div class="about">
    <ProductList v-if="productList.length" :products="productList" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import { getProducts } from "@/api/product";
import { obfuscateLvString } from "@/helper/obfuscater";

export default {
  name: "Question-2",
  components: {
    ProductList,
  },
  data() {
    return {
      productList: [],
      needObfuscateBrands: ["Louis Vuitton"],
    };
  },
  watch: {
    $route() {
      this.initProductList();
    },
  },
  created() {
    this.initProductList();
  },
  methods: {
    async initProductList() {
      this.productList = await getProducts();
      this.productList = this.productList.map((product) => {
        return {
          ...product,
          brand: this.needObfuscateBrands.includes(product.brand)
            ? obfuscateLvString(product.brand)
            : product.brand,
          originalBrand: product.brand,
        };
      });
    },
  },
};
</script>
