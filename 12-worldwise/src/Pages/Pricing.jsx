// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just ₹999/weekend.
          </h2>
          <p>
            Access unlimited travel tracking, smart trip insights, cloud sync, and your personal
            world map — all in one place. Your adventures deserve more than memories. They deserve
            WorldWise.
          </p>

          <p>
            With <strong>WorldWise</strong>, every trip becomes a story you can keep forever. <br />{" "}
            <em>Explore. Save. Remember. Travel smarter.</em>
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
