import styles from "./aboutPage.module.css";
import Button from "../../components/Button/Button";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import eventEmitter from "../../eventEmitter";

import { Fade } from "react-awesome-reveal";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Блок с фоном --> */}
      <div className={styles.intro}>
        <div className={styles.intro__content_wrapper}>
          <div className={classNames([styles.intro__content, "container"])}>
            <Fade triggerOnce cascade damping={0.1} direction={"up"}>
              <div className={styles.intro__title}>
                {t("about_intro_title")}
              </div>
              <div className={styles.intro__text}>
                <p>{t("about_intro_text_1")}</p>
                <p>{t("about_intro_text_2")}</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      {/* <-- Блок с фоном */}
      {/* Остальное --> */}
      <div className={styles.invite} id="contacts">
        <Fade triggerOnce>
          <div className={classNames([styles.invite__content, "container"])}>
            <div className={styles.invite__title}>
              {t("about_invite_title")}
            </div>
            <div className={styles.invite__text}>{t("about_invite_text")}</div>
            <div className={styles.invite__btn}>
              <Button arrow onClick={() => eventEmitter.dispatch("contact")}>
                {t("Contact Us")}
              </Button>
            </div>
          </div>
        </Fade>
      </div>
      {/* <-- Остальное */}
    </>
  );
};

export default AboutPage;
