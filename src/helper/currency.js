const currencyMapper = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export const formatCurrency = (amount, symbolCurrency) => {
  const [countryFormatter] = Object.entries(currencyMapper).find(
    ([, value]) => value === symbolCurrency
  );

  return Intl.NumberFormat(countryFormatter, {
    style: "currency",
    currency: countryFormatter,
  }).format(amount);
};
