#!/usr/bin/env node
import { Command, Option } from "commander";

import { Converter } from "./models/Converter.model";
import { Currency } from "./models/Currency.model";

const main = async () => {
  const app = new Command();
  app.version("v1.0.0", "-v, --version", "output the current version");
  app.requiredOption("-a, --amount <value>", "amount to convert");
  app
    .addOption(
      new Option(
        "-s, --source [currency]",
        "currency corresponding to the amount",
      ).default("EUR"),
    )
    .addOption(
      new Option(
        "-t, --target [currency]",
        "currency in which you want to convert the amount",
      ).default("USD"),
    );
  app.parse(process.argv);

  const { amount, source, target } = app.opts();

  // Instantiation of Currency classes (source and target)
  const currencySource = new Currency(source);
  const currencyTarget = new Currency(target);
  // Get exchange rate for the target currency
  await currencyTarget.getExchangeRate(currencySource.name);

  // Instantiation of Converter class
  const converter = new Converter(amount, currencySource, currencyTarget);
  converter.setConversion();

  // Display result of conversion
  console.log(converter.toString());
};

main();
