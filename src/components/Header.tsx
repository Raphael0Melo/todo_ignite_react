import styles from "./Header.module.css";

import Logo from "../assets/Logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" className={styles.img} />
    </header>
  );
}
