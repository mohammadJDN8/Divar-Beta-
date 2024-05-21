import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>رشت</p>
        </span>
      </div>
      <div>
        <span>
          <img src="profile.svg" />
          <p>دیوار من</p>
        </span>
        <Link to="/" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
