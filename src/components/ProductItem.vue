<template>
  <div class="product card">
    <div class="card-img"></div>
    <div class="card-info">
      <p class="text-title">{{ product.name }}</p>
      <p class="text-body">{{ product.brand }}</p>
      <p class="text-body">{{ product.seller.name }}</p>
      <p class="text-body">{{ product.shippable_countries.join(", ") }}</p>
      <p class="text-body">{{ timeSince(product.deposited_on) }} ago</p>
    </div>
    <div class="card-footer">
      <span class="text-title">{{ product.price.price }}</span>
      <span class="text-title text-through" v-if="product.oldPrice">{{
        product.oldPrice.price
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
  methods: {
    // convert date to date ago, month ago, year ago
    // https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time-eg-2-seconds-ago-one-week-ago-etc-best
    timeSince(dateStr) {
      const date = new Date(dateStr);
      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product {
  font-family: sans-serif;
  font-weight: light;
  color: white;
  // align-items: center;
  // justify-content: center;
  color: black;
}

.product {
  min-height: 300px;
  background-color: teal;
}

.card {
  width: 190px;
  height: 430px;
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.card-img {
  background-color: #ffcaa6;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
}

.card-info {
  padding-top: 10%;
  text-align: left;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

.text-title {
  font-weight: 900;
  font-size: 0.9em;
  line-height: 1.5;
}

.text-title.text-through {
  text-decoration: line-through;
}

.text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
}

.card-button {
  border: 1px solid #252525;
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
}
</style>
