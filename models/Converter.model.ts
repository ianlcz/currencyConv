import { Currency } from "./Currency.model";

export class Converter {
  private amount!: number;
  private conversion!: number;
  private source!: Currency;
  private target!: Currency;

  constructor(amount: number, source: Currency, target: Currency) {
    this.amount = amount;
    this.source = source;
    this.target = target;
  }

  /**
   * Conversion of the target currency
   */
  public async setConversion(): Promise<void> {
    this.conversion = Number((this.amount * this.target.rate).toFixed(2));
  }

  /**
   * Currency conversion result into string
   * @returns Currency conversion string
   */
  public toString(): string {
    Number(2).toString();
    return `${this.amount} ${this.source.name} = ${this.conversion} ${this.target.name}`;
  }
}
