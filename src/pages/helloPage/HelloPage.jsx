import styles from "./HelloPage.module.css";
import Counter from "../../components/counter/Counter";

export default function HelloPage() {
  return (
    <>
      <section>
        <div className={styles.intro}>
          <div className={styles.textBlock}>
            <h1>SUMMER</h1>
            <h1 style={{ fontWeight: "300" }}>
              CAMP’
              <Counter end={24} duration={4000} />
            </h1>
            <p>Don’t miss your chance for unforgettable summer adventures!</p>
            <button className={styles.campButton}>JOIN US!</button>
          </div>
          <img src="camp.svg" alt="" className={styles.introImg} />
        </div>
        <img src="mask.svg" alt="" className={styles.mask} />
      </section>
    </>
  );
}