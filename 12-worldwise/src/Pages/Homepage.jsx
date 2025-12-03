import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { TypeAnimation } from "react-type-animation";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Welcome to {}
          <TypeAnimation
            sequence={[
              "WorldWise", // text
              1500, // wait 1 second
              "", // clears text
              500,
            ]}
            speed={10}
            repeat={Infinity}
            className={styles.typing}
          />
        </h1>
        <h2>
          "your personal travel companion. Explore the world, save your
          <br /> favorite places, and keep track of where you’ve been.
          <br /> Discover continents, countries, and cities
          <br /> with just one click."
          <br /> <span>Travel smart. Travel Wise.</span>
        </h2>

        <Link to="/app" className="cta">
          Start tracking how
        </Link>
      </section>
    </main>
  );
}

// You travel the world.WorldWise keeps track of your adventures. A world map that tracks your footsteps into every city you can think of. Never forget your
// wonderful experiences, and show your friends how you have wandered the world.
