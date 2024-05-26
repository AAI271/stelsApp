import styles from "./cardM2.module.css";

type CardM2Type = {
  date: string;
  tag: string;
  text: string;
  image: string;
};

const CardM2 = ({ date, tag, text, image }: CardM2Type) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__tags}>
          <div className={styles.card__date}>{date}</div>
          <div className={styles.card__tag}>{tag}</div>
        </div>
        <div className={styles.card__text}>{text}</div>
      </div>
    </div>
  );
};

export default CardM2;
