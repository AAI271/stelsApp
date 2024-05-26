import { ReactNode, MouseEvent } from "react";
import classNames from "classnames";
import styles from "./button.module.css";

type ButtonType = {
  children: ReactNode;
  style?: any | undefined;
  arrow?: boolean;
  grey?: boolean;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  style,
  arrow = false,
  grey,
  href,
  onClick,
}: ButtonType) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      style={style}
      className={classNames([styles.button, "hover", grey && styles.grey])}
    >
      <div className={styles.button_inner}>
        {children}
        {arrow && (
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00952 5.05025H15.4498V14.4905"
              stroke="white"
              strokeWidth="1.67"
            />
            <path
              d="M15.1943 5.30574L5.55029 14.9497"
              stroke="white"
              strokeWidth="1.67"
            />
          </svg>
        )}
      </div>
    </a>
  ) : (
    <button
      onClick={onClick}
      style={style}
      className={classNames([styles.button, "hover", grey && styles.grey])}
    >
      <div className={styles.button_inner}>
        {children}
        {arrow && (
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00952 5.05025H15.4498V14.4905"
              stroke="white"
              strokeWidth="1.67"
            />
            <path
              d="M15.1943 5.30574L5.55029 14.9497"
              stroke="white"
              strokeWidth="1.67"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default Button;
