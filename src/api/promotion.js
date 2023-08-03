import promoCode from "../constants/common-promotion-code.js";

export const getPromotionData = (code, options) => {
  let promoCodeData = promoCode.find((promo) => {
    const isExist = promo.code === code;

    // Check valid
    if (isExist) {
      if (options) {
        const { brand } = options;
        if (promo.brand.indexOf(brand) === -1) {
          return false;
        }

        if (new Date(promo.expireDate) < new Date()) {
          return false;
        }

        return true;
      } else if (promo.brand) {
        // Check all brand allowed
        return false;
      }

      return true;
    }

    return false;
  });

  return Promise.resolve(promoCodeData);
};
