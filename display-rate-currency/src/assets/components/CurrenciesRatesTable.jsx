import { useState, useEffect } from "react";
import { fetchCurrenciesRates } from "../services/CurrenciesRates";

export default function CurrenciesRatesTable() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchCurrenciesRates();
        const getRates = response.data.rates;
        // console.log(Object.entries(getRates))
        setRates(Object.entries(getRates));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  

  const buyRate = (rate) => {
    return rate * 1.05;
  }

  const sellRate = (rate) => {
    return rate * 0.95;
  };

  return (
    <>
      <div className="table-responsive-md m-5 pt-5 text-center fs-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Currency</th>
              <th scope="col">We Buy</th>
              <th scope="col">Exchange Rate</th>
              <th scope="col">We Sell</th>
            </tr>
          </thead>
          <tbody>
            {rates.map(([currency, rate]) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{buyRate(rate).toFixed(3)}</td>
                <td>{Number(rate).toFixed(3)}</td>
                <td>{sellRate(rate).toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
