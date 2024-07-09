import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.column}>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/CampSite/">Hello</Link>
            </li>
            <li>
              <Link to="/CampSite/about/">About</Link>
            </li>
            <li>
              <Link to="/CampSite/news/">News</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact us</h3>
          <ul>
            <li>
              <a href="tel:">+7(0000)00-00-00</a>
              <img src="phoneIcon.svg" alt="" />
            </li>
            <li>
              <a href="mailto:">example@example.com</a>
              <img src="mailIcon.svg" alt="" />
            </li>
            <div className={styles.row}>
              <li>
                <a href="">
                  <img src="tg.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="inst.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="pint.svg" alt="" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
}
