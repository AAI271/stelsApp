import styles from "./cardMain.module.css";
import sampleImage from "./assets/card-img.png";
import classNames from "classnames";

import { Fade } from "react-awesome-reveal";
import Button from "../../Button/Button";

type CardMainType = {
  image?: string;
  animationTypeMobile?: string;
  video?: string;
  tag?: string;
  title: string;
  text?: string;
  list?: string;
  imagePosition?: string;
  className?: string;
  type?: string;
  link: string;
  button?:{text:string,link?:string}
};

const CardMain = ({
  image = sampleImage,
  animationTypeMobile,
  video,
  tag,
  title,
  text,
  list,
  imagePosition = "left",
  className,
  type,
}: CardMainType) => {
  return (
    <div
      className={classNames([
        styles.card,
        className,
        type === "use-case" && styles.case_type,
      ])}
      style={{
        flexDirection: imagePosition === "right" ? "row-reverse" : "row",
      }}
    >
      <Fade triggerOnce>
        <div className={styles.card__image}>
          {video ? (
            <video
              src={video}
              className="icon"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
            ></video>
          ) : (
            <img src={image} className="icon" alt="" />
          )}
        </div>
      </Fade>
      <div className={styles.card__content}>
        {animationTypeMobile === "fade" && window.innerWidth < 768 ? (
          <Fade triggerOnce cascade damping={1e-2}>
            {tag && <div className={styles.card__tag}>{tag}</div>}
            <div className={styles.card__title}>{title}</div>
            {list ? (
              <div className={styles.card__list}>
                {list.split(";").map((item, idx) => {
                  return (
                    <div className={styles.card__list_item} key={idx}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#FF7A00"
                          fillOpacity="0.2"
                        />
                        <circle cx="12" cy="12" r="4" fill="#FF7A00" />
                      </svg>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.card__text}>{text}</div>
            )}
          </Fade>
        ) : (
          <Fade triggerOnce cascade damping={1e-1} direction={"up"}>
            {tag && <div className={styles.card__tag}>{tag}</div>}
            <div className={styles.card__title}>{title}</div>
            {list ? (
              <div className={styles.card__list}>
                {list.split(";").map((item, idx) => {
                  return (
                    <div className={styles.card__list_item} key={idx}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#FF7A00"
                          fillOpacity="0.2"
                        />
                        <circle cx="12" cy="12" r="4" fill="#FF7A00" />
                      </svg>
                      <div>{item}</div>
                      
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.card__text}>{text}</div>
            )}
            
          </Fade>
        )}
        <div className={styles.card__btn}>
        <Button arrow>
                Learn more
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default CardMain;
