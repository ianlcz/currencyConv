import axios from "axios";

export class Currency {
  name!: string;
  rate!: number;

  constructor(name: string = "EUR") {
    this.name = name;
  }

  async init(base: string = "EUR") {
    this.rate = await axios
      .get(
        `https://api.coinbase.com/v2/exchange-rates?currency=${base.toUpperCase()}`,
      )
      .then((res) => {
        const { rates } = res.data.data;
        return rates[this.name];
      })
      .catch((err) => console.error(err.message));
  }
}
