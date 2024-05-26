import classNames from "classnames";
import styles from "./usagePage.module.css";
import Button from "../../components/Button/Button";
import CardXs from "../../components/Cards/CardXs/CardXs";
import CardMain from "../../components/Cards/Main/CardMain";
import Final from "../../components/Final/Final";
import usageImage1 from "./assets/usage-image-1.png";
import usageImage2 from "./assets/usage-image-2.png";
import usageImage3 from "./assets/usage-image-3.png";
import { useTranslation } from "react-i18next";
import eventEmitter from "../../eventEmitter";
import CardsSlider from "../../components/CardsSlider/CardsSlider";

import { Fade } from "react-awesome-reveal";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, LegacyRef } from "react";

interface Anchors {
  directions: LegacyRef<HTMLDivElement>;
  cases: LegacyRef<HTMLDivElement>;
  advantages: LegacyRef<HTMLDivElement>;
}

const UsagePage = () => {
  const { t } = useTranslation();

  const anchors: Anchors = {
    directions: useRef<HTMLDivElement>(null),
    cases: useRef<HTMLDivElement>(null),
    advantages: useRef<HTMLDivElement>(null),
  };
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        anchors[hash.slice(1)]?.current?.scrollIntoView();
      }, 500);
    }
  }, []);

  return (
    <>
      {/* Вступление --> */}
      <div className={classNames([styles.intro, "container"])}>
        <Fade triggerOnce cascade damping={1e-1}>
          <div className={styles.intro__title}>{t("usage_intro_title")}</div>
          <div className={styles.intro__text}>{t("usage_intro_text")}</div>
          <div className={styles.intro__actions}>
            <Button href="#" arrow>
              {t("Get In")}
            </Button>
            <Button grey arrow onClick={() => eventEmitter.dispatch("contact")}>
              {t("Contact Us")}
            </Button>
          </div>
        </Fade>
      </div>
      {/* <-- Вступление */}
      {/* Карточки --> */}
      <div
        className={classNames(["container", styles.cards])}
        ref={anchors.directions}
        id="directions"
      >
        <CardsSlider>
          <CardXs tag={t("usage_cards_1_tag")} text={t("usage_cards_1_text")} />
          <CardXs tag={t("usage_cards_2_tag")} text={t("usage_cards_2_text")} />
          <CardXs tag={t("usage_cards_3_tag")} text={t("usage_cards_3_text")} />
        </CardsSlider>
      </div>
      {/* <-- Карточки */}
      {/* Крупный текст --> */}
      <div className={styles.text}>
        <Fade triggerOnce>
          <div className={styles.text__text}>{t("usage_text")}</div>
        </Fade>
      </div>
      {/* <-- Крупный текст */}
      {/* Карточки кейсы --> */}
      <div className={styles.cases} ref={anchors.cases} id="cases">
        <div className={styles.cases__title}>{t("Use cases")}</div>
        <div className={styles.cases__content}>
          <CardMain
            type={"use-case"}
            className={styles.cases__card}
            link={"#"}
            image={usageImage1}
            title={t("usage_cases_1_title")}
            list={t("usage_cases_1_text")}
          />
          <CardMain
            type={"use-case"}
            className={styles.cases__card}
            link={"#"}
            image={usageImage2}
            title={t("usage_cases_2_title")}
            list={t("usage_cases_2_text")}
            imagePosition="right"
          />
          <CardMain
            type={"use-case"}
            className={styles.cases__card}
            link={"#"}
            image={usageImage3}
            title={t("usage_cases_3_title")}
            list={t("usage_cases_3_text")}
          />
        </div>
      </div>
      {/* <-- Карточки кейсы */}
      {/* Карточки преимущетсва --> */}
      <div
        className={styles.advantages}
        ref={anchors.advantages}
        id="advantages"
      >
        <div className={styles.advantages__title}>
          {t("Technology advantages")}
        </div>
        <div className={classNames([styles.advantages__content, "container"])}>
          <CardsSlider>
            <CardXs
              className={styles.advantages__card}
              type={2}
              text={t("usage_adv_1_text")}
            />
            <CardXs
              className={styles.advantages__card}
              type={2}
              text={t("usage_adv_2_text")}
            />
            <CardXs
              className={styles.advantages__card}
              type={2}
              text={t("usage_adv_3_text")}
            />
            <CardXs
              className={styles.advantages__card}
              type={2}
              text={t("usage_adv_4_text")}
            />
            <CardXs
              className={styles.advantages__card}
              type={2}
              text={t("usage_adv_5_text")}
            />
            <CardXs
              className={styles.advantages__card}
              type={2}
              text={t("usage_adv_6_text")}
            />
          </CardsSlider>
        </div>
        {/* <div className={styles.advantages__btn}>
                    <Button href={"#"} arrow>
                        {t("Learn More")}
                    </Button>
                </div> */}
      </div>
      {/* <-- Карточки преимущетсва */}

      {/* <div className={styles.join}>
                <div className={styles.join__title}>JOIN GLIESEREUM LABS</div>
                <div className={styles.join__text}>Make Your Idea the Next Big Thing</div>
                <div className={styles.join__big_cards}>
                    <div className={styles.strategy__card}>
                        <div className={styles.strategy__card_icon}>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="150" r="149" stroke="#D9D9D9" stroke-opacity="0.1" strokeWidth="2" />
                                <path d="M250 150C250 205.228 205.228 250 150 250C94.7715 250 50 205.228 50 150C50 94.7715 94.7715 50 150 50C205.228 50 250 94.7715 250 150Z" fill="#D9D9D9" fillOpacity="0.02" />
                                <circle cx="150" cy="150" r="60" fill="#D9D9D9" fillOpacity="0.05" />
                                <path d="M154.234 126.106C154.834 125.39 156 125.815 156 126.748V154C156 154.552 155.552 155 155 155H132.144C131.295 155 130.832 154.008 131.378 153.357L154.234 126.106Z" fill="#FF7A00" />
                                <path d="M145.766 173.894C145.166 174.61 144 174.185 144 173.252V146C144 145.448 144.448 145 145 145H167.856C168.705 145 169.168 145.992 168.622 146.643L145.766 173.894Z" fill="#FF7A00" />
                            </svg>
                        </div>
                        <div className={styles.strategy__card_title}>Стратегия 1</div>
                        <div className={styles.strategy__card_text}>Open a new market and with fully prepared and stress-tested economy. Scale you secondary token markets to reach new audience</div>
                    </div>
                    <div className={styles.strategy__card}>
                        <div className={styles.strategy__card_icon}>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="150" r="149" stroke="#D9D9D9" stroke-opacity="0.1" strokeWidth="2" />
                                <path d="M250 150C250 205.228 205.228 250 150 250C94.7715 250 50 205.228 50 150C50 94.7715 94.7715 50 150 50C205.228 50 250 94.7715 250 150Z" fill="#D9D9D9" fillOpacity="0.02" />
                                <circle cx="150" cy="150" r="60" fill="#D9D9D9" fillOpacity="0.05" />
                                <path d="M154.234 126.106C154.834 125.39 156 125.815 156 126.748V154C156 154.552 155.552 155 155 155H132.144C131.295 155 130.832 154.008 131.378 153.357L154.234 126.106Z" fill="#FF7A00" />
                                <path d="M145.766 173.894C145.166 174.61 144 174.185 144 173.252V146C144 145.448 144.448 145 145 145H167.856C168.705 145 169.168 145.992 168.622 146.643L145.766 173.894Z" fill="#FF7A00" />
                            </svg>
                        </div>
                        <div className={styles.strategy__card_title}>Стратегия 1</div>
                        <div className={styles.strategy__card_text}>Open a new market and with fully prepared and stress-tested economy. Scale you secondary token markets to reach new audience</div>
                    </div>
                    <div className={styles.strategy__card}>
                        <div className={styles.strategy__card_icon}>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="150" r="149" stroke="#D9D9D9" stroke-opacity="0.1" strokeWidth="2" />
                                <path d="M250 150C250 205.228 205.228 250 150 250C94.7715 250 50 205.228 50 150C50 94.7715 94.7715 50 150 50C205.228 50 250 94.7715 250 150Z" fill="#D9D9D9" fillOpacity="0.02" />
                                <circle cx="150" cy="150" r="60" fill="#D9D9D9" fillOpacity="0.05" />
                                <path d="M154.234 126.106C154.834 125.39 156 125.815 156 126.748V154C156 154.552 155.552 155 155 155H132.144C131.295 155 130.832 154.008 131.378 153.357L154.234 126.106Z" fill="#FF7A00" />
                                <path d="M145.766 173.894C145.166 174.61 144 174.185 144 173.252V146C144 145.448 144.448 145 145 145H167.856C168.705 145 169.168 145.992 168.622 146.643L145.766 173.894Z" fill="#FF7A00" />
                            </svg>
                        </div>
                        <div className={styles.strategy__card_title}>Стратегия 1</div>
                        <div className={styles.strategy__card_text}>Open a new market and with fully prepared and stress-tested economy. Scale you secondary token markets to reach new audience</div>
                    </div>
                </div>
                <div className={styles.join__small_cards_wrapper}>
                    <div className={styles.join__small_cards}>
                        <div className={styles.join__small_card}>
                            <div className={styles.join__small_card_icon}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2001_1560)">
                                        <ellipse cx="12.3728" cy="50.2395" rx="8.49053" ry="8.49053" transform="rotate(-15 12.3728 50.2395)" fill="#FF7A00" />
                                        <ellipse cx="21.1233" cy="29.7605" rx="8.49053" ry="8.49053" transform="rotate(-15 21.1233 29.7605)" fill="#FF7A00" />
                                        <ellipse cx="44.2288" cy="34.9446" rx="8.49053" ry="8.49053" transform="rotate(-15 44.2288 34.9446)" fill="#FF7A00" />
                                        <ellipse cx="51.6268" cy="15.0687" rx="8.49053" ry="8.49053" transform="rotate(-15 51.6268 15.0687)" fill="#FF7A00" />
                                        <path d="M12.14 50.2652L18.6861 36.1017" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                        <path d="M45.9948 31.8863L51.9293 17.3696" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                        <path d="M28.041 30.4922L37.4056 32.6365" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2001_1560">
                                            <rect width="64" height="64" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.join__small_card_text}>Market Making Services</div>
                        </div>
                        <div className={styles.join__small_card}>
                            <div className={styles.join__small_card_icon}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2001_1560)">
                                        <ellipse cx="12.3728" cy="50.2395" rx="8.49053" ry="8.49053" transform="rotate(-15 12.3728 50.2395)" fill="#FF7A00" />
                                        <ellipse cx="21.1233" cy="29.7605" rx="8.49053" ry="8.49053" transform="rotate(-15 21.1233 29.7605)" fill="#FF7A00" />
                                        <ellipse cx="44.2288" cy="34.9446" rx="8.49053" ry="8.49053" transform="rotate(-15 44.2288 34.9446)" fill="#FF7A00" />
                                        <ellipse cx="51.6268" cy="15.0687" rx="8.49053" ry="8.49053" transform="rotate(-15 51.6268 15.0687)" fill="#FF7A00" />
                                        <path d="M12.14 50.2652L18.6861 36.1017" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                        <path d="M45.9948 31.8863L51.9293 17.3696" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                        <path d="M28.041 30.4922L37.4056 32.6365" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2001_1560">
                                            <rect width="64" height="64" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.join__small_card_text}>Market Making Services</div>
                        </div>
                        <div className={styles.join__small_card}>
                            <div className={styles.join__small_card_icon}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2001_1560)">
                                        <ellipse cx="12.3728" cy="50.2395" rx="8.49053" ry="8.49053" transform="rotate(-15 12.3728 50.2395)" fill="#FF7A00" />
                                        <ellipse cx="21.1233" cy="29.7605" rx="8.49053" ry="8.49053" transform="rotate(-15 21.1233 29.7605)" fill="#FF7A00" />
                                        <ellipse cx="44.2288" cy="34.9446" rx="8.49053" ry="8.49053" transform="rotate(-15 44.2288 34.9446)" fill="#FF7A00" />
                                        <ellipse cx="51.6268" cy="15.0687" rx="8.49053" ry="8.49053" transform="rotate(-15 51.6268 15.0687)" fill="#FF7A00" />
                                        <path d="M12.14 50.2652L18.6861 36.1017" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                        <path d="M45.9948 31.8863L51.9293 17.3696" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                        <path d="M28.041 30.4922L37.4056 32.6365" stroke="#FF7A00" strokeWidth="4" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2001_1560">
                                            <rect width="64" height="64" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.join__small_card_text}>Market Making Services</div>
                        </div>
                    </div>
                    <div className={styles.join__small_cards_btn}>
                        <Button arrow>Join</Button>
                    </div>
                </div>
            </div> */}
      <Final
        subtitle={t("usage_final_subtitle")}
        title={t("usage_final_title")}
        btnText={t("usage_final_btnText")}
        btnLink={"#"}
      />
    </>
  );
};

export default UsagePage;
