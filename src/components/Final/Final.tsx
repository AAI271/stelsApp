import Button from "../Button/Button";
import styles from "./final.module.css";
import { useTranslation } from "react-i18next";
import eventEmitter from "../../eventEmitter";

import { Fade } from "react-awesome-reveal";

type FinalType = {
  subtitle: string;
  title: string;
  btnText: string;
  btnLink: string;
  hidden?: boolean;
};

const Final = ({
  subtitle,
  title,
  btnText,
  btnLink,
  hidden = false,
}: FinalType) => {
  const { t } = useTranslation();
  if (hidden) {
    return (
      <div className={styles.final}>
        <Fade triggerOnce cascade damping={1e-1} direction={"up"}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.actions}>
            <Button
              arrow
              grey
              onClick={() => eventEmitter.dispatch("contact", {})}
            >
              {t("Contact Us")}
            </Button>
          </div>
        </Fade>
      </div>
    );
  } else {
    return (
      <div className={styles.final}>
        <Fade triggerOnce cascade damping={1e-1} direction={"up"}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.actions}>
            <Button href={btnLink} arrow>
              {btnText}
            </Button>
            <Button
              arrow
              grey
              onClick={() => eventEmitter.dispatch("contact", {})}
            >
              {t("Contact Us")}
            </Button>
          </div>
        </Fade>
      </div>
    );
  }
};

export default Final;
