import Button from "../../components/Button/Button";
import CardXs from "../../components/Cards/CardXs/CardXs";
import styles from "./servicePage.module.css";
import imageBlockImage1 from "./assets/image-block-image-1.png";
import imageBlockImage2 from "./assets/image-block-image-2.png";

import p3 from "./assets/partners/3.svg";
import p5 from "./assets/partners/5.svg";
import p8 from "./assets/partners/8.svg";
import p9 from "./assets/partners/9.svg";
import p10 from "./assets/partners/10.svg";
import p11 from "./assets/partners/11.svg";
import p12 from "./assets/partners/12.svg";
import p13 from "./assets/partners/13.svg";
import p14 from "./assets/partners/14.svg";
import p15 from "./assets/partners/15.svg";
import p16 from "./assets/partners/16.svg";
import p17 from "./assets/partners/17.svg";
import p18 from "./assets/partners/18.svg";
import p19 from "./assets/partners/19.svg";
import p20 from "./assets/partners/20.svg";
import p21 from "./assets/partners/21.svg";
import p22 from "./assets/partners/22.svg";
import p23 from "./assets/partners/23.svg";
import p24 from "./assets/partners/24.svg";
import p26 from "./assets/partners/26.svg";
import p27 from "./assets/partners/27.svg";
import p28 from "./assets/partners/28.svg";
import Final from "../../components/Final/Final";
import classNames from "classnames";
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
  points: LegacyRef<HTMLDivElement>;
  control: LegacyRef<HTMLDivElement>;
  exchanges: LegacyRef<HTMLDivElement>;
}

const ServicePage = () => {
  const { t } = useTranslation();

  const anchors: Anchors = {
    points: useRef<HTMLDivElement>(null),
    control: useRef<HTMLDivElement>(null),
    exchanges: useRef<HTMLDivElement>(null),
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
      <div className={classNames([styles.intro, "container"])}>
        <Fade triggerOnce cascade damping={1e-1}>
          
          <div className={styles.intro__title}>{t("service_intro_title")}</div>
          <div className={styles.intro__text}>{t("service_intro_text")}</div>
          <div className={styles.intro__actions}>
            <Button href={"https://pro.stels.dev"} arrow>
              {t("Get In")}
            </Button>
            <Button arrow grey onClick={() => eventEmitter.dispatch("contact")}>
              {t("Contact Us")}
            </Button>
          </div>
        </Fade>
      </div>
      <div
        className={classNames(["container","tablet_container", styles.cards])}
        ref={anchors.points}
        id="points"
      >
        <CardsSlider>
          <CardXs
            className={styles.cards_card}
            tag={t("service_cards_1_tag")}
            text={t("service_cards_1_text")}
          />
          <CardXs
            className={styles.cards_card}
            tag={t("service_cards_2_tag")}
            text={t("service_cards_2_text")}
          />
          <CardXs
            className={styles.cards_card}
            tag={t("service_cards_3_tag")}
            text={t("service_cards_3_text")}
          />
          <CardXs
            className={styles.cards_card}
            tag={t("service_cards_4_tag")}
            text={t("service_cards_4_text")}
          />
          <CardXs
            className={styles.cards_card}
            tag={t("service_cards_5_tag")}
            text={t("service_cards_5_text")}
          />
          <CardXs
            className={styles.cards_card}
            tag={t("service_cards_6_tag")}
            text={t("service_cards_6_text")}
          />
        </CardsSlider>
      </div>
      {/*  <-- Карточки */}
      {/* Крупный текст --> */}
      <div className={classNames([styles.text,"tablet_container"])}>
        <Fade triggerOnce>
          <div className={styles.text__text}>{t("service_text")}</div>
        </Fade>
      </div>
      {/*  <-- Крупный текст */}
      {/* Дашборд --> */}
      <div className={classNames([styles.image_block,"tablet_container"])} ref={anchors.control} id="control">
        <Fade triggerOnce>
          <div className={styles.image_block__text}>
            {t("service_image_text")}
          </div>
        </Fade>
        <Fade triggerOnce>
          <div className={styles.image_block__image}>
            <img src={imageBlockImage1} alt="" />
          </div>
        </Fade>
      </div>
      {/*  <-- Дашборд */}
      {/* Лента --> */}
      <div className={styles.partners} ref={anchors.exchanges} id="exchanges">
        <div className={styles.partners__title}>{t("Connected exchanges")}</div>
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
          {[
            p3,
            p5,
            p8,
            p9,
            p10,
            p11,
            p12,
            p13,
            p14,
            p15,
            p16,
            p17,
            p18,
            p19,
            p20,
            p21,
            p22,
            p23,
            p24,
            p26,
            p27,
            p28,
          ].map((p) => (
            <SwiperSlide key={p} className={styles.partners__slide}>
              <img src={p} alt="" className="icon" />
            </SwiperSlide>
          ))}
          <div className={styles.partners__slider_shadow}></div>
          <div className={styles.partners__slider_shadow}></div>
        </Swiper>
      </div>
      {/*  <-- Лента */}

      {/* <div className={classNames([styles.partners, "container"])}>
                <div className={styles.partners__title}>{t("Connected exchanges")}</div>
                <div className={styles.partners__content}>
                    {window.innerWidth > 980 ? (
                        [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14].map((p) => (
                            <div className={styles.partners__partner}>
                                <img src={p} alt="" className="icon" />
                            </div>
                        ))
                    ) : (
                        <Swiper
                            spaceBetween={24}
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
                            {[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14].map((p) => (
                                <SwiperSlide key={p} className={styles.partners__slide}>
                                    <img src={p} alt="" className="icon" />
                                </SwiperSlide>
                            ))}
                            <div className={styles.partners__slider_shadow}></div>
                            <div className={styles.partners__slider_shadow}></div>
                        </Swiper>
                    )}
                </div>
            </div> */}
      {/* Ссылка --> */}
      <div className={classNames([styles.image_block_2,"tablet_container"])}>
        <div className={styles.image_block_2__text_content}>
          <Fade triggerOnce cascade damping={1e-1}>
            <div className={styles.image_block_2__title}>
              {t("service_image_2_title")}
            </div>
            <div className={styles.image_block_2__text}>
              {t("service_image_2_text")}
            </div>
            <div className={styles.image_block_2__btn}>
              <Button href={"#"} arrow>
                {t("Contact Us")}
              </Button>
            </div>
          </Fade>
        </div>
        <Fade triggerOnce>
          <div className={styles.image_block_2__image}>
            <img src={imageBlockImage2} alt="" />
          </div>
        </Fade>
      </div>
      {/* <-- Ссылка */}
      <Final
        subtitle={t("service_final_subtitle")}
        title={t("service_final_title")}
        btnText={t("service_final_btn")}
        btnLink={"#"}
      />
    </>
  );
};

export default ServicePage;
