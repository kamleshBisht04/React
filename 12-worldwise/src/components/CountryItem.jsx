import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const countryName = country.country.length > 12 ? country.country.slice(0, 15) : country.country;
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}

export default CountryItem;
