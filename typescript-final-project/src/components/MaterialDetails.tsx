import type { Product } from "../types";
import { getMaterialDetails } from "../data/materialDetails";
import "./MaterialDetails.css";

type MaterialDetailsProps = {
  product: Product;
  onBack: () => void;
};

function MaterialDetails({ product, onBack }: MaterialDetailsProps) {
  const details = getMaterialDetails(product.id);

  return (
    <main className="material-page">
      <button className="back-button" onClick={onBack}>
        &larr; Back to materials
      </button>
      <section className="material-hero">
        <div className="material-hero-copy">
          <p className="detail-kicker">Material profile / {product.category}</p>
          <h1>{product.name}</h1>
          <p className="material-summary">{details.summary}</p>
          <span
            className={`stock-status ${product.inStock ? "stock-in" : "stock-out"}`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="material-visual">
          <img src={details.image} alt={details.imageAlt} />
          <span className="visual-ring visual-ring-one" />
          <span className="visual-ring visual-ring-two" />
          <span className="visual-orbit orbit-one" />
          <span className="visual-orbit orbit-two" />
        </div>
      </section>

      <section className="material-sections">
        <div className="uses-panel">
          <p className="detail-kicker">Where it works</p>
          <h2>Common uses</h2>
          <div className="use-list">
            {details.uses.map((use, index) => (
              <div className="use-item" key={use}>
                <span>0{index + 1}</span>
                {use}
              </div>
            ))}
          </div>
        </div>
        <div className="cost-panel">
          <p className="detail-kicker">Indicative international pricing</p>
          <h2>Market costs</h2>
          <p className="cost-note">
            Reference estimates in USD. Actual prices vary by grade, quantity,
            freight, and contract.
          </p>
          <div className="cost-list">
            {details.regionalCosts.map((cost) => (
              <div className="cost-row" key={cost.region}>
                <span>
                  {cost.region}
                  <small>{cost.unit}</small>
                </span>
                <strong>
                  {cost.currency} {cost.price}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MaterialDetails;
