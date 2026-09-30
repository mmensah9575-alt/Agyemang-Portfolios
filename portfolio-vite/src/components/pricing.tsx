 import { useState } from "react";

type PricingType = "individual" | "professional";

function Pricing() {
  const [pricingType, setPricingType] =
    useState<PricingType>("individual");

  return (
    /* Pricing */
    <section className="Plans-cards" id="portfolio">
      <div className="Pricing-title">
        <div className="title-description">
          <p>Pricing</p>

          <h2>
            Choose <span>Your Plan</span>
          </h2>

          <p>
            A Private Limited is the most popular type of partnership Malta. The
            limited liability is, in fact, the only type of company allowed by
            Companies.
          </p>
        </div>

        {/* Pricing buttons */}
        <div className="Pricing-btn pricing-toogle">
          <button
            className={`Ind-button toggle-btn ${
              pricingType === "individual" ? "active" : ""
            }`}
            onClick={() => setPricingType("individual")}
          >
            <img src="" alt="" />

            <h5>Individual</h5>

            <p>For Monthly Project</p>
          </button>

          <button
            className={`Ind-button toggle-btn ${
              pricingType === "professional" ? "active" : ""
            }`}
            onClick={() => setPricingType("professional")}
          >
            <img src="" alt="" />

            <h5>Professional</h5>

            <p>For Yearly Project</p>
          </button>
        </div>
      </div>

      {/* ================= INDIVIDUAL CARDS ================= */}

      {pricingType === "individual" && (
        <div className="card-group">
          {/* Basic Plan */}
          <div className="card-one">
            <div className="card-one-top">
              <p>Basic Plan</p>

              <h2>
                <span>$</span>09 <span>/month</span>
              </h2>
            </div>

            <div className="card-one-bottom">
              <ul>
                <li>2 App</li>
                <li>400 Gb/s storage</li>
                <li>Free coustom domain</li>
                <li>Chat support</li>
                <li>No transaction</li>
                <li>Unlimited Storage</li>
              </ul>

              <button className="card-one-btn">Choose plane</button>
            </div>
          </div>

          {/* Startup Plan */}
          <div className="card-one">
            <div className="card-one-top card-two">
              <p>Startup Plan</p>

              <h2>
                <span>$</span>49 <span>/month</span>
              </h2>
            </div>

            <div className="card-one-bottom card-two">
              <ul>
                <li>2 App</li>
                <li>400 Gb/s storage</li>
                <li>Free coustom domain</li>
                <li>Chat support</li>
                <li>No transaction</li>
                <li>Unlimited Storage</li>
              </ul>

              <button className="card-one-btn">Choose plane</button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card-one">
            <div className="card-one-top">
              <p>Enterprise Plan</p>

              <h2>
                <span>$</span>99 <span>/month</span>
              </h2>
            </div>

            <div className="card-one-bottom">
              <ul>
                <li>2 App</li>
                <li>400 Gb/s storage</li>
                <li>Free coustom domain</li>
                <li>Chat support</li>
                <li>No transaction</li>
                <li>Unlimited Storage</li>
              </ul>

              <button className="card-one-btn">Choose plane</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PROFESSIONAL CARDS ================= */}

      {pricingType === "professional" && (
        <div className="card-group">
          {/* Basic Plan */}
          <div className="card-one">
            <div className="card-one-top card-two">
              <p>Basic Plan</p>

              <h2>
                <span>$</span>119 <span>/month</span>
              </h2>
            </div>

            <div className="card-one-bottom card-two">
              <ul>
                <li>2 App</li>
                <li>400 Gb/s storage</li>
                <li>Free coustom domain</li>
                <li>Chat support</li>
                <li>No transaction</li>
                <li>Unlimied Storage</li>
              </ul>

              <button className="card-one-btn">Choose plane</button>
            </div>
          </div>

          <div className="card-one">
            <div className="card-one-top card-two">
              <p>Basic Plan</p>

              <h2>
                <span>$</span>119 <span>/month</span>
              </h2>
            </div>

            <div className="card-one-bottom ">
              <ul>
                <li>2 App</li>
                <li>400 Gb/s storage</li>
                <li>Free coustom domain</li>
                <li>Chat support</li>
                <li>No transaction</li>
                <li>Unlimied Storage</li>
              </ul>

              <button className="card-one-btn">Choose plane</button>
            </div>
          </div>

          <div className="card-one">
            <div className="card-one-top card-two">
              <p>Basic Plan</p>

              <h2>
                <span>$</span>119 <span>/month</span>
              </h2>
            </div>

            <div className="card-one-bottom">
              <ul>
                <li>2 App</li>
                <li>400 Gb/s storage</li>
                <li>Free coustom domain</li>
                <li>Chat support</li>
                <li>No transaction</li>
                <li>Unlimied Storage</li>
              </ul>

              <button className="card-one-btn">Choose plane</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Pricing