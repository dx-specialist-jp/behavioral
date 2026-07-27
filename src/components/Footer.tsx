import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>くせラボ — 行動経済学の原理を、イラストと体験デモで学ぶサイト</p>
      <p className={styles.credit}>
        本サイトは行動経済学の学びの場を提供することを目的とした非商用サイトです。広告掲載・販売は行っていません。
      </p>
      <p className={styles.credit}>
        イラスト:{" "}
        <a href="https://www.irasutoya.com/" target="_blank" rel="noreferrer">
          いらすとや
        </a>
      </p>
    </footer>
  );
}
