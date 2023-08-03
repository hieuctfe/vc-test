<template>
  <div class="home">
    <div>Example Promotion link (Click to link below)</div>
    <router-link
      :to="{
        path: '/question1',
        query: { brand: 'Off-White', promotionCode: 'PROMO-WHITE-OFF' },
      }"
      >Promotion Link</router-link
    >
    <div>
      <ProductList v-if="productList.length" :products="productList" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList";
import { getProducts } from "@/api/product";
import { getPromotionData } from "@/api/promotion";
import { formatCurrency } from "../helper/currency.js";

export default {
  name: "Question-1",
  components: {
    ProductList,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.initProductList();
  },
  watch: {
    $route() {
      this.initProductList();
    },
  },
  methods: {
    async initProductList() {
      const { brand, promotionCode } = this.$route.query;
      const promotionData = await getPromotionData(promotionCode, { brand });

      this.fetchProductList({ brand, promotion: promotionData });
    },
    async fetchProductList(filter) {
      let productData = await getProducts();

      if (filter) {
        const { brand, promotion } = filter;
        if (brand) {
          productData = productData.filter(
            (product) => product.brand.toUpperCase() === brand.toUpperCase()
          );
        }
        if (promotion) {
          const discount = promotion.discount;
          productData = productData.map((product) => {
            const { price } = product;
            const newPrice = {};
            newPrice.price_in_cents = Math.round(
              price.price_in_cents * (1 - discount)
            );
            newPrice.price = formatCurrency(
              newPrice.price_in_cents / 100,
              price.currency
            );

            product.oldPrice = price;
            product.price = newPrice;
            return product;
          });
        }

        this.productList = productData;
      }
    },
  },
};
</script>
