import classNames from "classnames";
import styles from "./distributePage.module.css";
import Button from "../../components/Button/Button";
import CardXs from "../../components/Cards/CardXs/CardXs";
import CardXs2 from "../../components/Cards/CardXs2/CardXs2";
import bigCardImage from "./assets/big-card-image.png";
// import CardMain from "../../components/Cards/Main/CardMain";

import p1 from "./assets/partners/1.svg";
import p2 from "./assets/partners/2.svg";
import p4 from "./assets/partners/4.svg";
import p6 from "./assets/partners/6.svg";
import p7 from "./assets/partners/7.svg";
import p12 from "./assets/partners/12.svg";
import p14 from "./assets/partners/14.svg";
import p15 from "./assets/partners/15.svg";
import p17 from "./assets/partners/17.svg";
import p24 from "./assets/partners/24.svg";
import p29 from "./assets/partners/29.svg";
import p30 from "./assets/partners/30.png";
import Final from "../../components/Final/Final";
import { useTranslation } from "react-i18next";
import eventEmitter from "../../eventEmitter";
import CardsSlider from "../../components/CardsSlider/CardsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, LegacyRef } from "react";
import { useLocation } from "react-router-dom";

interface Anchors {
  features: LegacyRef<HTMLDivElement>;
  advantages: LegacyRef<HTMLDivElement>;
  clients: LegacyRef<HTMLDivElement>;
}

const DistributePage = () => {
  const { t } = useTranslation();

  const anchors: Anchors = {
    features: useRef<HTMLDivElement>(null),
    advantages: useRef<HTMLDivElement>(null),
    clients: useRef<HTMLDivElement>(null),
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
          <div className={styles.intro__title}>{t("dist_intro_title")}</div>
          <div className={styles.intro__text}>{t("dist_intro_text")}</div>
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
        className={classNames(["container", "tablet_container", styles.cards])}
        ref={anchors.features}
        id="features"
      >
        <CardsSlider>
          <CardXs
            className={styles.cards_card}
            type={2}
            text={t("dist_cards_1_text")}
            tag={
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.25"
                  y="11.75"
                  width="3.5"
                  height="12.5"
                  rx="1.75"
                  stroke="#FF7A00"
                  strokeWidth="3.5"
                />
                <rect
                  x="13.25"
                  y="15.75"
                  width="3.5"
                  height="8.5"
                  rx="1.75"
                  stroke="#FF7A00"
                  strokeWidth="3.5"
                />
                <rect
                  x="24.25"
                  y="3.75"
                  width="3.5"
                  height="20.5"
                  rx="1.75"
                  stroke="#FF7A00"
                  strokeWidth="3.5"
                />
              </svg>
            }
          />
          <CardXs
            className={styles.cards_card}
            type={2}
            text={t("dist_cards_2_text")}
            tag={
              <svg
                width="20"
                height="30"
                viewBox="0 0 20 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.662498 16.06C0.25716 15.4115 0.257161 14.5885 0.662499 13.94L8.304 1.71359C9.08734 0.460257 10.9127 0.460258 11.696 1.71359L19.3375 13.94C19.7428 14.5885 19.7428 15.4115 19.3375 16.06L11.696 28.2864C10.9127 29.5397 9.08734 29.5397 8.304 28.2864L0.662498 16.06Z"
                  fill="#FF7A00"
                />
              </svg>
            }
          />
          <CardXs
            className={styles.cards_card}
            type={2}
            text={t("dist_cards_3_text")}
            tag={
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="12" rx="6" fill="#FF7A00" />
                <rect x="16" width="12" height="12" rx="6" fill="#FF7A00" />
                <rect y="16" width="12" height="12" rx="6" fill="#FF7A00" />
                <rect
                  x="16"
                  y="16"
                  width="12"
                  height="12"
                  rx="6"
                  fill="#FF7A00"
                />
              </svg>
            }
          />
          <CardXs
            className={styles.cards_card}
            type={2}
            text={t("dist_cards_4_text")}
            tag={
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="17" width="28" height="11" rx="5.5" fill="#FF7A00" />
                <rect x="8" width="12" height="12" rx="6" fill="#FF7A00" />
              </svg>
            }
          />
        </CardsSlider>
      </div>
      {/* <-- Карточки */}
      {/*  Крупный текст --> */}
      <div className={styles.text}>
        <Fade triggerOnce>
          <div className={styles.text__text}>{t("dist_text")}</div>
        </Fade>
      </div>
      {/* <-- Крупный текст */}

      {/* <div className={classNames([styles.strategy, "container"])}>
                <CardsSlider>
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
                        <div className={styles.strategy__card_title}>{t("dist_strategy_1_title")}</div>
                        <div className={styles.strategy__card_text}>{t("dist_strategy_1_text")}</div>
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
                        <div className={styles.strategy__card_title}>{t("dist_strategy_2_title")}</div>
                        <div className={styles.strategy__card_text}>{t("dist_strategy_2_text")}</div>
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
                        <div className={styles.strategy__card_title}>{t("dist_strategy_3_title")}</div>
                        <div className={styles.strategy__card_text}>{t("dist_strategy_3_text")}</div>
                    </div>
                </CardsSlider>
            </div> */}

      {/*  Крупные карточки --> */}
      <div
        className={classNames([styles.advantages],"tablet_container")}
        ref={anchors.advantages}
        id="advantages"
      >
        <div className={styles.advantages__title}>
          {t("Platform advantages")}
        </div>
        <div className={classNames([styles.advantages__content, "container"])}>
          <CardsSlider>
            <CardXs2
              type={3}
              text={t("dist_adv_1_title")}
              secondText={t("dist_adv_1_text")}
              tag={
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.25"
                    y="11.75"
                    width="3.5"
                    height="12.5"
                    rx="1.75"
                    stroke="#FF7A00"
                    strokeWidth="3.5"
                  />
                  <rect
                    x="13.25"
                    y="15.75"
                    width="3.5"
                    height="8.5"
                    rx="1.75"
                    stroke="#FF7A00"
                    strokeWidth="3.5"
                  />
                  <rect
                    x="24.25"
                    y="3.75"
                    width="3.5"
                    height="20.5"
                    rx="1.75"
                    stroke="#FF7A00"
                    strokeWidth="3.5"
                  />
                </svg>
              }
              className={styles.advantages__card}
            />
            <CardXs2
              type={3}
              text={t("dist_adv_2_title")}
              secondText={t("dist_adv_2_text")}
              tag={
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.662498 16.06C0.25716 15.4115 0.257161 14.5885 0.662499 13.94L8.304 1.71359C9.08734 0.460257 10.9127 0.460258 11.696 1.71359L19.3375 13.94C19.7428 14.5885 19.7428 15.4115 19.3375 16.06L11.696 28.2864C10.9127 29.5397 9.08734 29.5397 8.304 28.2864L0.662498 16.06Z"
                    fill="#FF7A00"
                  />
                </svg>
              }
              className={styles.advantages__card}
            />
            <CardXs2
              type={3}
              text={t("dist_adv_3_title")}
              secondText={t("dist_adv_3_text")}
              tag={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="12" height="12" rx="6" fill="#FF7A00" />
                  <rect x="16" width="12" height="12" rx="6" fill="#FF7A00" />
                  <rect y="16" width="12" height="12" rx="6" fill="#FF7A00" />
                  <rect
                    x="16"
                    y="16"
                    width="12"
                    height="12"
                    rx="6"
                    fill="#FF7A00"
                  />
                </svg>
              }
              className={styles.advantages__card}
            />
            <CardXs2
              type={3}
              text={t("dist_adv_4_title")}
              secondText={t("dist_adv_4_text")}
              tag={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="17" width="28" height="11" rx="5.5" fill="#FF7A00" />
                  <rect x="8" width="12" height="12" rx="6" fill="#FF7A00" />
                </svg>
              }
              className={styles.advantages__card}
            />
            <CardXs2
              type={3}
              text={t("dist_adv_5_title")}
              secondText={t("dist_adv_5_text")}
              tag={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="17" width="28" height="11" rx="5.5" fill="#FF7A00" />
                  <rect x="8" width="12" height="12" rx="6" fill="#FF7A00" />
                </svg>
              }
              className={styles.advantages__card}
            />
            {/* <CardXs2
                            type={3}
                            text={t("dist_adv_5_title")}
                            secondText={t("dist_adv_5_text")}
                            tag={
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="17" width="28" height="11" rx="5.5" fill="#FF7A00" />
                                    <rect x="8" width="12" height="12" rx="6" fill="#FF7A00" />
                                </svg>
                            }
                            className={classNames([styles.advantages__card, "hidden"])}
                        /> */}
          </CardsSlider>
        </div>
      </div>
      {/*  <-- Крупные карточки */}
      {/*  Ссылка с картинкой --> */}
      <div className={styles.image_block_2}>
        <div className={styles.image_block_2__text_content}>
          <Fade triggerOnce cascade damping={1e-1}>
            <div className={styles.image_block_2__title}>
              {t("dist_image_title")}
            </div>
            <div className={styles.image_block_2__text}>
              {t("dist_image_text")}
            </div>
            <div className={styles.image_block_2__btn}>
              <Button href="#" arrow>
                {t("Learn More")}
              </Button>
            </div>
          </Fade>
        </div>
        <Fade triggerOnce>
          <div className={styles.image_block_2__image}>
            <img src={bigCardImage} alt="" />
          </div>
        </Fade>
      </div>
      {/*  <-- Ссылка с картинкой */}
      {/*  Лента --> */}
      <div className={styles.partners} ref={anchors.clients} id="clients">
        <div className={styles.partners__title}>
          {t("Trusted by institutional clients")}
        </div>
        <Swiper
          spaceBetween={window.innerWidth > 768 ? 66 : 24}
          className={styles.partners__slider}
          slidesPerView={"auto"}
          direction="horizontal"
          autoplay={{
            delay: -1,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          wrapperClass={styles.partners__slider_wrapper}
          allowTouchMove={false}
        >
          {[p2, p1, p4, p6, p12, p17, p15, p14, p24, p7, p29, p30].map((p) => (
            <SwiperSlide key={p} className={styles.partners__slide}>
              <img src={p} alt="" className="icon" />
            </SwiperSlide>
          ))}
          <div className={styles.partners__slider_shadow}></div>
          <div className={styles.partners__slider_shadow}></div>
        </Swiper>
      </div>
      {/*  <-- Лента */}

      <Final
        subtitle={t("dist_final_subtitle")}
        title={t("dist_final_title")}
        btnText={t("dist_final_btnText")}
        btnLink={"#"}
      />
    </>
  );
};

export default DistributePage;
