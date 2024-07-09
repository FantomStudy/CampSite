import styles from "./NewsPage.module.css";
import Footer from "../../components/footer/Footer";

export default function NewsPage() {
  return (
    <>
      <section>
        <div className={styles.intro}>
          <div className={styles.textBlock}>
            <h1>THIS IS</h1>
            <h1 style={{ fontWeight: "300", color: "var(--primary)" }}>News</h1>
            <p>Stay tuned to keep up to date with all the news!</p>
          </div>
          <img src="megaphone.svg" alt="" className={styles.introImg} />
        </div>
        <img src="maskMeg.svg" alt="" className={styles.mask} />
      </section>
      
      <Footer></Footer>
    </>
  );
}
