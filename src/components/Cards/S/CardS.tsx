import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./cardS.module.css";

import { Fade } from "react-awesome-reveal";
import Button from "../../Button/Button";

type CardSType = {
  title: string;
  icon: ReactNode;
  className: string;
  buttonText?: string;
  link?: string;
};

const CardS = ({ title, icon, className, buttonText }: CardSType) => {
  return (
    <div className={classNames([styles.card, className])}>
      <Fade triggerOnce cascade damping={1e-1}>
        <div className={styles.card__icon}>{icon}</div>
        <div className={styles.card__title}>{title}</div>
      </Fade>
      {buttonText&&(
        <Button arrow>
        {buttonText}
      </Button>
      )}
    </div>
  );
};

export default CardS;
