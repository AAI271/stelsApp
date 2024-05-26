import classNames from "classnames";
import styles from "./cardM.module.css";

import { Fade } from "react-awesome-reveal";

type CardMType = {
  title: string;
  text: string;
  className: string;
};

const CardM = ({
  title = "500K+",
  text = "Total Contract Creators",
  className,
}: CardMType) => {
  return (
    <div className={classNames([styles.card, className])}>
      <Fade triggerOnce direction="up">
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__text}>{text}</div>
      </Fade>
    </div>
  );
};

export default CardM;
