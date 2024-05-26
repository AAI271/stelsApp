import { useEffect, useRef, LegacyRef } from "react";
import styles from "./mainpage.module.css";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import p1 from "./assets/partners/1.svg";
import p2 from "./assets/partners/2.svg";
import p3 from "./assets/partners/3.svg";
import p5 from "./assets/partners/5.svg";
import p6 from "./assets/partners/6.svg";
import p7 from "./assets/partners/7.svg";
import p11 from "./assets/partners/11.svg";
import p12 from "./assets/partners/12.svg";
import p13 from "./assets/partners/13.svg";
import p14 from "./assets/partners/14.svg";
import p15 from "./assets/partners/15.svg";
import p16 from "./assets/partners/16.svg";
import p17 from "./assets/partners/17.svg";
import CardS from "../../components/Cards/S/CardS";
import CardMain from "../../components/Cards/Main/CardMain";

import CardM from "../../components/Cards/M/CardM";
//import CardM2 from "../../components/Cards/M2/CardM2";
import Final from "../../components/Final/Final";

import mainImage from "./assets/main.png";
import CardL from "../../components/Cards/L/CardL";
//import newsImage from "./assets/news-image.png";
import eventEmitter from "../../eventEmitter";
import CardsSlider from "../../components/CardsSlider/CardsSlider";
import { Map } from "./Map";

import { Fade } from "react-awesome-reveal";
import { useLocation } from "react-router-dom";

const cardImage1 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/01.animation%20(NODES).mp4";
const cardImage2 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/05.animation_1%20(SPEED).mp4";
const cardImage3 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/03.animation%20(BANDWIDTH).mp4";
const cardImage4 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/04.animation%20(CONNECTABILITY).mp4";
const video1 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/main__slider_video_1.MP4";
const video2 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/main__slider_video_2.MP4";
const video3 =
  "https://glcdn.sgp1.cdn.digitaloceanspaces.com/animations/main__slider_video_3.MP4";
const video4 = "./assets/optus.MP4";

interface Anchors {
  partners: LegacyRef<HTMLDivElement>;
  advantages: LegacyRef<HTMLDivElement>;
  stats: LegacyRef<HTMLDivElement>;
  services: LegacyRef<HTMLDivElement>;
}

const MainPage = () => {
  const { t } = useTranslation();

  const videoNavPrev: LegacyRef<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const videoNavNext: LegacyRef<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const anchors: Anchors = {
    partners: useRef<HTMLDivElement>(null),
    advantages: useRef<HTMLDivElement>(null),
    stats: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
  };
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        anchors[hash.slice(1)]?.current?.scrollIntoView();
      }, 500);
    }
  }, []);

  console.log("MAIN PAGE");

  return (
    <>
      <div className={classNames([styles.intro, "container"])}>
        <div className={styles.intro__text}>
          <Fade triggerOnce cascade damping={1e-1}>
            <div className={styles.intro__text_title}>
              {t("main_intro_title")}
            </div>
            <div className={styles.intro__text_text}>
              {t("main_intro_text")}
            </div>
            <div className={styles.intro__text_actions}>
              <Button href="https://stels.dev" arrow>
                {t("Get In")}
              </Button>
              <Button
                arrow
                grey
                onClick={() => eventEmitter.dispatch("contact")}
              >
                {t("Contact Us")}
              </Button>
            </div>
          </Fade>
        </div>
        <Fade triggerOnce direction={"up"}>
          <img
            src={mainImage}
            className={styles.intro__image}
            alt="The Future of Markets"
          />
        </Fade>
      </div>

      <div className={styles.partners} id="partners" ref={anchors.partners}>
        <div className={styles.partners__title}>{t("Trusted by")}</div>
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
          {[p12, p15, p5, p14, p1, p6, p7, p3, p17, p2, p13, p11, p16].map(
            (p) => (
              <SwiperSlide key={p} className={styles.partners__slide}>
                <img src={p} alt="" className="icon" />
              </SwiperSlide>
            )
          )}
          <div className={styles.partners__slider_shadow}></div>
          <div className={styles.partners__slider_shadow}></div>
        </Swiper>
      </div>
      <div className={classNames([styles.text, "container"])}>
        <Fade triggerOnce>
          <div className={styles.text__text}>{t("main_text")}</div>
        </Fade>
      </div>
      <div className={classNames([styles.links, "container"])}>
        <CardS
          title={t("main_link_1")}
          buttonText={t("main_link_1_btn")}
          icon={
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
          link={"#"}
          className={styles.links__card}
        />
        <CardS
          title={t("main_link_2")}
          buttonText={t("main_link_2_btn")}
          icon={
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
          link={"#"}
          className={styles.links__card}
        />
        <CardS
          title={t("main_link_3")}
          buttonText={t("main_link_3_btn")}
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58172 0 0 3.58172 0 8V20C0 24.4183 3.58172 28 8 28H20C24.4183 28 28 24.4183 28 20V8C28 3.58172 24.4183 0 20 0H8ZM8.41421 12.5858C7.63316 13.3668 7.63316 14.6332 8.41421 15.4142L12.5858 19.5858C13.3669 20.3669 14.6332 20.3669 15.4143 19.5858L19.5859 15.4142C20.3669 14.6332 20.3669 13.3668 19.5859 12.5858L15.4143 8.41417C14.6332 7.63312 13.3669 7.63312 12.5858 8.41417L8.41421 12.5858Z"
                fill="#FF7A00"
              />
            </svg>
          }
          link={"#"}
          className={styles.links__card}
        />
      </div>
      <Fade triggerOnce>
        <div className={classNames([styles.video, "container"])}>
          <div className={styles.video__nav}>
            <div
              className={classNames([styles.video__nav_btn, "hover"])}
              ref={videoNavPrev}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.32474 1.32473L14 8L7.32474 14.6753"
                  stroke="white"
                  strokeWidth="1.67"
                />
                <path d="M13.6387 8L0 8" stroke="white" strokeWidth="1.67" />
              </svg>
            </div>
            <div
              className={classNames([styles.video__nav_btn, "hover"])}
              ref={videoNavNext}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.32474 1.32473L14 8L7.32474 14.6753"
                  stroke="white"
                  strokeWidth="1.67"
                />
                <path d="M13.6387 8L0 8" stroke="white" strokeWidth="1.67" />
              </svg>
            </div>
          </div>
          <Swiper
            navigation={{
              prevEl: videoNavPrev.current,
              nextEl: videoNavNext.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = videoNavPrev.current;
              swiper.params.navigation.nextEl = videoNavNext.current;
            }}
            spaceBetween={66}
            slidesPerView={1}
            direction="horizontal"
            modules={[Navigation]}
          >
            <SwiperSlide className={styles.video__container}>
              <video
                src={video1}
                className={styles.video__content}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              ></video>
            </SwiperSlide>
            <SwiperSlide className={styles.video__container}>
              <video
                src={video2}
                className={styles.video__content}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              ></video>
            </SwiperSlide>
            <SwiperSlide className={styles.video__container}>
              <video
                src={video3}
                className={styles.video__content}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              ></video>
            </SwiperSlide>
            <SwiperSlide className={styles.video__container}>
              <video
                src={video4}
                className={styles.video__content}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              ></video>
            </SwiperSlide>
          </Swiper>
        </div>
      </Fade>
      <div
        className={classNames([styles.cards, "container"])}
        id="advantages"
        ref={anchors.advantages}
      >
        <Fade triggerOnce>
          <div className={styles.cards__title}>{t("main_cards_title")}</div>
        </Fade>
        <div className={styles.cards__content}>
          <CardsSlider>
            <CardMain
              animationTypeMobile="fade"
              link={"/service"}
              video={cardImage3}
              tag={t("main_cards_3_tag")}
              title={t("main_cards_3_title")}
              text={t("main_cards_3_text")}
            />
            <CardMain
              animationTypeMobile="fade"
              link={"/service"}
              video={cardImage1}
              tag={t("main_cards_1_tag")}
              title={t("main_cards_1_title")}
              text={t("main_cards_1_text")}
              imagePosition="right"
            />
            <CardMain
              animationTypeMobile="fade"
              link={"/service"}
              video={cardImage2}
              tag={t("main_cards_2_tag")}
              title={t("main_cards_2_title")}
              text={t("main_cards_2_text")}
            />
            <CardMain
              animationTypeMobile="fade"
              link={"/service"}
              video={cardImage4}
              tag={t("main_cards_4_tag")}
              title={t("main_cards_4_title")}
              text={t("main_cards_4_text")}
              imagePosition="right"
            />
          </CardsSlider>
        </div>
      </div>
      {/*  <-- Карточки */}

      {/*  Карта --> */}
      <div className={styles.globe}>
        <div className={classNames([styles.globe__content, "container"])}>
          <div className={styles.global__text_wrapper}>
            <Fade triggerOnce cascade damping={1e-1}>
              <div className={styles.globe__title}>{t("main_globe_title")}</div>
              <div className={styles.globe__text}>{t("main_globe_text")}</div>
            </Fade>
          </div>
          <div className={styles.globe__image}>
            <Fade triggerOnce>
              <Map />
            </Fade>
          </div>
        </div>
      </div>
      {/*  <-- Карта */}
      {/*  Карточки стата --> */}
      <div
        className={classNames([styles.stats, "container"])}
        id="stats"
        ref={anchors.stats}
      >
        <Fade triggerOnce>
          <div className={styles.stats__title}>{t("Stats")}</div>
        </Fade>
        <div className={styles.stats__content}>
          <CardM
            title={t("main_stats_1_title")}
            text={t("main_stats_1_text")}
            className={styles.stats__card}
          />
          <CardM
            title={t("main_stats_2_title")}
            text={t("main_stats_2_text")}
            className={styles.stats__card}
          />
          <CardM
            title={t("main_stats_3_title")}
            text={t("main_stats_3_text")}
            className={styles.stats__card}
          />
          <CardM
            title={t("main_stats_4_title")}
            text={t("main_stats_4_text")}
            className={styles.stats__card}
          />
          <CardM
            title={t("main_stats_5_title")}
            text={t("main_stats_5_text")}
            className={styles.stats__card}
          />
          <CardM
            title={t("main_stats_6_title")}
            text={t("main_stats_6_text")}
            className={styles.stats__card}
          />
        </div>
      </div>
      {/*  <-- Карточки стата */}

      {/*  Карточки сервисы --> */}
      <div
        className={classNames([styles.services, "container"])}
        id="services"
        ref={anchors.services}
      >
        <Fade triggerOnce>
          <div className={styles.services__title}>{t("Services")}</div>
        </Fade>
        <div className={styles.services__content}>
          <CardsSlider>
            <CardL
              link={"/service"}
              title={t("main_services_1_title")}
              list={t("main_services_1_list")}
            />
            <CardL
              link={"/service"}
              title={t("main_services_2_title")}
              list={t("main_services_2_list")}
            />
            <CardL
              link={"/service"}
              title={t("main_services_3_title")}
              list={t("main_services_3_list")}
            />
            <CardL
              link={"/service"}
              title={t("main_services_4_title")}
              list={t("main_services_4_list")}
            />
            <CardL
              link={"/service"}
              title={t("main_services_5_title")}
              list={t("main_services_5_list")}
            />
            <CardL
              link={"/service"}
              title={t("main_services_6_title")}
              list={t("main_services_6_list")}
            />
          </CardsSlider>
        </div>
      </div>
      {/*  <-- Карточки сервисы */}

      {/* <div className={classNames([styles.news, "container"])}>
                <div className={styles.news__title}>{t("as seen in")}</div>
                <div className={styles.news__content}>
                    <div className={styles.news__nav}>
                        <div className={classNames([styles.news__nav_btn, "hover"])} ref={newsNavPrev}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.32474 1.32473L14 8L7.32474 14.6753" stroke="white" strokeWidth="1.67" />
                                <path d="M13.6387 8L0 8" stroke="white" strokeWidth="1.67" />
                            </svg>
                        </div>
                        <div className={classNames([styles.news__nav_btn, "hover"])} ref={newsNavNext}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.32474 1.32473L14 8L7.32474 14.6753" stroke="white" strokeWidth="1.67" />
                                <path d="M13.6387 8L0 8" stroke="white" strokeWidth="1.67" />
                            </svg>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={window.innerWidth < 768 ? 12 : 32}
                        className={styles.news__slider}
                        slidesPerView={window.innerWidth < 768 ? "auto" : "3"}
                        direction="horizontal"
                        speed={500}
                        loop={false}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: newsNavPrev.current,
                            nextEl: newsNavNext.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = newsNavPrev.current;
                            swiper.params.navigation.nextEl = newsNavNext.current;
                        }}
                    >
                        <SwiperSlide
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <CardM2 image={newsImage} date={"February 9, 2024"} tag={t("main_news_1_tag")} text={t("main_news_1_text")} />
                        </SwiperSlide>
                        <SwiperSlide
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <CardM2 image={newsImage} date={"February 9, 2024"} tag={t("main_news_1_tag")} text={t("main_news_1_text")} />
                        </SwiperSlide>
                        <SwiperSlide
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <CardM2 image={newsImage} date={"February 9, 2024"} tag={t("main_news_1_tag")} text={t("main_news_1_text")} />
                        </SwiperSlide>
                        <SwiperSlide
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <CardM2 image={newsImage} date={"February 9, 2024"} tag={t("main_news_1_tag")} text={t("main_news_1_text")} />
                        </SwiperSlide>
                        <SwiperSlide
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <CardM2 image={newsImage} date={"February 9, 2024"} tag={t("main_news_1_tag")} text={t("main_news_1_text")} />
                        </SwiperSlide>
                        <SwiperSlide
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <CardM2 image={newsImage} date={"February 9, 2024"} tag={t("main_news_1_tag")} text={t("main_news_1_text")} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div> */}
      <Final
        subtitle={t("main_final_subtitle")}
        title={t("main_final_title")}
        btnText={t("Get Started")}
        btnLink={"https://pro.stels.dev"}
      />
    </>
  );
};

export default MainPage;
