import { Converter } from "./models/Converter.model";
import { Currency } from "./models/Currency.model";

const main = async () => {
  // Instantiation of Currency classes (source and target)
  const currencySource = new Currency("BTC");
  const currencyTarget = new Currency("USD");
  // Get exchange rate for the target currency
  await currencyTarget.getExchangeRate(currencySource.name);

  // Instantiation of Converter class
  const converter = new Converter(20, currencySource, currencyTarget);
  converter.setConversion();

  // Display result of conversion
  console.log(converter.toString());
};

main();
