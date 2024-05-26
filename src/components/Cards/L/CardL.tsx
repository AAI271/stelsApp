import { ReactNode } from "react";
import styles from "./cardL.module.css";
import Button from "../../Button/Button";

type CardLType = {
  title: string;
  icon?: ReactNode;
  list: string;
  link?: string;
};

const CardL = ({
  title,
  icon = (
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
  ),
  list = "",
}: CardLType) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>{icon}</div>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__list}>
        {list.split(",").map((item, idx) => (
          <div className={styles.card__list_item} key={idx}>
            <div className={styles.card__list_item_icon}>
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
                <path d="M16 12L12 6L8 12L12 18L16 12Z" fill="#FF7A00" />
              </svg>
            </div>
            <div className={styles.card__list_item_text}>{item}</div>
          </div>
        ))}
      </div>
      <div className={styles.card__btn}>
        <Button arrow>
                Learn more
        </Button>
        </div>
    </div>
  );
};

export default CardL;
