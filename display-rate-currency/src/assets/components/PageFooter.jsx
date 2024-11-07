export default function PageFooter() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="text-center fst-italic fw-medium">
                *The base rate is USD.
              </p>
              <p className="text-center">powered by</p>
              <a
                href="https://currencyfreaks.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/logo.webp"
                  alt="CurrencyFreaks Logo"
                  className="api-logo p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
