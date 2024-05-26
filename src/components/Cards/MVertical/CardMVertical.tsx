import styles from "./cardMVertical.module.css";
import image from "./assets/card-img.png";
import classNames from "classnames";

const CardMVertical = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.card__title}>CREATE AND MANAGE MARKETS</div>
      <div className={styles.card__text}>
        One technology to rule all markets. Technology for distributed
        automation systems
      </div>
      <a href="#" className={classNames([styles.card__link, "hover"])}>
        Learn More
      </a>
    </div>
  );
};

export default CardMVertical;
