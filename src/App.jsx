import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => (
      <div className="info">
        <h5>
          Provide your contact details&nbsp;
          <i class="bi bi-person-check-fill"></i>
        </h5>
      </div>
    ),
  },
  {
    name: "Shipping Info",
    Component: () => (
      <div className="info">
        <h5>
          Enter your Shipping details&nbsp;<i class="bi bi-cart-check-fill"></i>
        </h5>
      </div>
    ),
  },
  {
    name: "Payments",
    Component: () => (
      <div className="info">
        <h5>
          Complete payment for your order&nbsp;
          <i class="bi bi-credit-card-2-front-fill"></i>
        </h5>
      </div>
    ),
  },
  {
    name: "Delivered",
    Component: () => (
      <div className="info">
        <h5>
          Your order has been delivered&nbsp;
          <i class="bi bi-rocket-takeoff-fill"></i>
        </h5>
      </div>
    ),
  },
];

function App() {
  return (
    <div>
      <center>
        <h2 className="checkout-heading">
          <span className="c">C</span>
          <span className="h">h</span>
          <span className="e">e</span>
          <span className="c">c</span>
          <span className="k">k</span>
          <span className="o">o</span>
          <span className="u">u</span>
          <span className="t">t</span>
        </h2>
      </center>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
