import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h3>
            Explore Smarter.
            <br />
            Travel with WorldWise.
          </h3>

          <p>
            Traveling is full of memories — places we visit, people we meet, stories we create. But
            remembering where we’ve been isn’t always easy. That’s where <strong>WorldWise</strong>{" "}
            comes in.
          </p>

          <p>
            <strong>WorldWise lets you:</strong>
            <br />
            🗺️ Pin and save your visited locations
            <br />
            📌 Add notes, dates, and memories
            <br />
            🌐 View everything on a personalized world map
            <br />
            💫 Revisit your travel journey anytime
          </p>
         
        </div>

        <img src="img-2.jpg" alt="World travel illustration" />
      </section>
    </main>
  );
}
