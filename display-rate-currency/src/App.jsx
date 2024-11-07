import "bootstrap/dist/css/bootstrap.min.css";
import CurrenciesRatesTable from "./assets/components/CurrenciesRatesTable";
import PageFooter from "./assets/components/PageFooter";


function App() {
  return (
    <>
      <div className="container">
        <CurrenciesRatesTable />
        <PageFooter />
      </div>
    </>
  );
}

export default App;
