import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./cardXs.module.css";

type CardXsType = {
  type?: number;
  tag?: ReactNode;
  text?: string;
  secondText?: string;
  className?: string;
};

const CardXs = ({
  type = 5,
  tag = (
    <svg
      width="30"
      height="25"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="16.9688"
        width="3"
        height="6.28126"
        rx="1.5"
        stroke="#E99531"
        strokeWidth="3"
      />
      <rect
        x="9.5"
        y="7.17188"
        width="3"
        height="16.0781"
        rx="1.5"
        stroke="#E99531"
        strokeWidth="3"
      />
      <rect
        x="17.5"
        y="11.2969"
        width="3"
        height="11.9531"
        rx="1.5"
        stroke="#E99531"
        strokeWidth="3"
      />
      <rect
        x="25.5"
        y="1.5"
        width="3"
        height="21.75"
        rx="1.5"
        stroke="#E99531"
        strokeWidth="3"
      />
    </svg>
  ),
  text = "Low risk HFT arbitrage strategies",
  secondText,
  className,
}: CardXsType) => {
  return (
    <div
      className={classNames([
        styles.card,
        className,
        type == 2 && styles.type2,
        type == 3 && styles.type3,
        type == 4 && styles.type4,
      ])}
    >
      <div className={styles.tag}>{tag}</div>
      <div className={classNames([styles.text])}>{text}</div>
      {secondText && (
        <div className={classNames([styles.secondText])}>{secondText}</div>
      )}
    </div>
  );
};

export default CardXs;
