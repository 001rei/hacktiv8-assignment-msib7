import axios from "axios";

const BASE_URL = import.meta.env.VITE_CURRENCY_API_URL;
const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export async function fetchCurrenciesRates() {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apikey: API_KEY,
        symbols: "CAD,IDR,JPY,CHF,EUR,GBP",
        base: "USD",
      },
    });
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
