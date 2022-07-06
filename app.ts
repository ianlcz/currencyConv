import { Currency } from "./models/Currency.model";

const main = async () => {
  // Instantiation of Currency class
  const currency = new Currency("BTC");

  // Initialization currency object to get the exchange rate
  await currency.init();

  // Show currency
  console.log("FROM :", currency);
};

main();
