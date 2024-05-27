import { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import eventEmitter from "../../eventEmitter";
import Graphite from "../Graphite/Graphite";

const Footer = () => {
  const { t } = useTranslation();

  const [, setContactFormOpen] = useState(false);

  eventEmitter.subscribe("contact", () => {
    setContactFormOpen(true);
  });

  useEffect(() => {
    const keyupHandler = (e: any) => {
      if (e.key === "Escape") {
        setContactFormOpen(false);
      }
    };
    window.addEventListener("keyup", keyupHandler);
    return () => {
      window.removeEventListener("keyup", keyupHandler);
    };
  }, []);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [tg, setTg] = useState("");
  // const [request, setRequest] = useState("");
  // const [error, setError] = useState("");
  // const [contactBtnText, setContactBtnText] = useState(t("Send"));

  // const submitHandler = () => {
  //   if (!name || !request || !(email || tg)) {
  //     setError(t("contact_error_text"));
  //     return;
  //   }
  //   fetch("some_endpoint", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       tg,
  //       request,
  //     }),
  //   });
  //   setEmail("");
  //   setName("");
  //   setTg("");
  //   setRequest("");
  //   setError("");
  //   setContactBtnText(t("Sended"));
  // };

  // useEffect(() => {
  //   if (name || email || tg || request) {
  //     setContactBtnText(t("Send"));
  //   }
  // }, [name, email, tg, request]);

  return (
    <>
      <footer className={styles.footer}>
        <div className={classNames([styles.content, "container"])}>
          <div className={styles.logo_block}>
          <div style={{ marginBottom: "20px"}}>
            <a href="/">
              <div style={{ display: "flex", alignItems: "center", opacity:"0.9" }}>
                <div>
                  <Graphite primary={"var(--stels-color-orange)"} />
                </div>
                <div>
                  <div>
                    <span style={{ fontSize: 20, fontWeight: 600 }}>STELS</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
            <div className={styles.logo_block__socials}>
              <a
                href="https://github.com/gliesereumlab"
                className={classNames([styles.logo_block__social, "hover"])}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                    fill="#707070"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/gliesereumlab"
                className={classNames([styles.logo_block__social, "hover"])}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.069 12.1445C22.069 10.9157 21.0835 9.93969 19.8826 9.93969C19.3153 9.93891 18.7696 10.1591 18.3594 10.5542C16.8541 9.46977 14.793 8.76512 12.4992 8.67475L13.5026 3.93985L16.7642 4.6445C16.8003 5.47587 17.4811 6.14464 18.3236 6.14464C19.1837 6.14464 19.8826 5.43999 19.8826 4.57214C19.8826 3.70477 19.1838 3 18.3236 3C17.7143 3 17.1764 3.36144 16.9256 3.88561L13.2878 3.10848C13.1802 3.09024 13.0726 3.10848 13.0009 3.16272C12.9112 3.21696 12.8576 3.3072 12.8398 3.41569L11.7284 8.69264C9.39874 8.76512 7.30185 9.46977 5.77866 10.5723C5.3684 10.1772 4.82267 9.95709 4.25535 9.95793C3.03667 9.95793 2.06897 10.9517 2.06897 12.1627C2.06897 13.0662 2.60649 13.8251 3.3594 14.1688C3.32284 14.3897 3.30484 14.6134 3.30561 14.8374C3.30561 18.2347 7.23045 21 12.0691 21C16.9078 21 20.8327 18.2529 20.8327 14.8374C20.8326 14.6135 20.8146 14.3899 20.7789 14.1688C21.5315 13.8251 22.069 13.048 22.069 12.1445ZM7.051 13.7166C7.051 12.8493 7.74977 12.1445 8.61037 12.1445C9.4705 12.1445 10.1694 12.8491 10.1694 13.7166C10.1694 14.5841 9.47061 15.2891 8.61037 15.2891C7.74989 15.3069 7.051 14.5841 7.051 13.7166ZM15.7788 17.8914C14.7035 18.9758 12.6604 19.0482 12.0691 19.0482C11.4598 19.0482 9.41683 18.9576 8.35916 17.8914C8.19815 17.7288 8.19815 17.4757 8.35916 17.3131C8.52053 17.1507 8.77138 17.1507 8.93274 17.3131C9.61389 18 11.0476 18.2347 12.0691 18.2347C13.0907 18.2347 14.5421 17.9998 15.2052 17.3131C15.3666 17.1507 15.6174 17.1507 15.7788 17.3131C15.9221 17.4757 15.9221 17.7288 15.7788 17.8914ZM15.4919 15.307C14.6316 15.307 13.9329 14.6024 13.9329 13.7349C13.9329 12.8674 14.6316 12.1627 15.4919 12.1627C16.3524 12.1627 17.0511 12.8674 17.0511 13.7349C17.0511 14.584 16.3524 15.307 15.4919 15.307Z"
                    fill="#707070"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/gliesereumlab"
                className={classNames([styles.logo_block__social, "hover"])}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0384 2C6.5338 2 2.06897 6.58933 2.06897 12.2474C2.06897 16.7739 4.94359 20.6088 8.85796 21.9919C9.34726 22.0547 9.53074 21.7404 9.53074 21.4889C9.53074 21.2375 9.53074 20.6088 9.53074 19.7286C6.77845 20.3573 6.16683 18.3456 6.16683 18.3456C5.73869 17.1511 5.06591 16.8367 5.06591 16.8367C4.14848 16.2081 5.12707 16.2081 5.12707 16.2081C6.10567 16.2709 6.65613 17.2768 6.65613 17.2768C7.57356 18.8485 8.98028 18.4084 9.53074 18.1569C9.59191 17.4654 9.89772 17.0253 10.1424 16.7739C7.94053 16.5224 5.61637 15.6422 5.61637 11.6816C5.61637 10.55 5.98334 9.66984 6.65613 8.91543C6.59496 8.72682 6.22799 7.65808 6.77845 6.27499C6.77845 6.27499 7.63472 6.02352 9.53074 7.34374C10.3259 7.09227 11.1821 7.0294 12.0384 7.0294C12.8947 7.0294 13.7509 7.15514 14.546 7.34374C16.4421 6.02352 17.2983 6.27499 17.2983 6.27499C17.8488 7.65808 17.4818 8.72682 17.4207 8.97829C18.0323 9.66984 18.4604 10.6128 18.4604 11.7445C18.4604 15.7051 16.1362 16.5224 13.9344 16.7739C14.3014 17.0882 14.6072 17.7169 14.6072 18.6599C14.6072 20.043 14.6072 21.1117 14.6072 21.4889C14.6072 21.7404 14.7907 22.0547 15.28 21.9919C19.2555 20.6088 22.069 16.7739 22.069 12.2474C22.0078 6.58933 17.543 2 12.0384 2Z"
                    fill="#707070"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.links__block}>
              <div className={styles.links__block_title}>{t("Home")}</div>
              <a href="/#partners" className={styles.links__block_item}>
                {t("Partners")}
              </a>
              <a href="/#advantages" className={styles.links__block_item}>
                {t("Advantages")}
              </a>
              <a href="/#stats" className={styles.links__block_item}>
                {t("Stats")}
              </a>
              <a href="/#services" className={styles.links__block_item}>
                {t("Services")}
              </a>
            </div>

            <div className={styles.links__block}>
              <a
                href="/service"
                className={classNames([
                  styles.links__block_title,
                  styles.links__block_title_hoverable,
                ])}
              >
                {t("Markets")}
              </a>
              <a href="/service#points" className={styles.links__block_item}>
                {t("Points")}
              </a>
              <a href="/service#control" className={styles.links__block_item}>
                {t("Control center")}
              </a>
              <a href="/service#exchanges" className={styles.links__block_item}>
                {t("Connected exchanges")}
              </a>
            </div>

            <div className={styles.links__block}>
              <a
                href="/distribute"
                className={classNames([
                  styles.links__block_title,
                  styles.links__block_title_hoverable,
                ])}
              >
                {t("Assets")}
              </a>
              <a
                href="/distribute#features"
                className={styles.links__block_item}
              >
                {t("Features")}
              </a>
              <a
                href="/distribute#advantages"
                className={styles.links__block_item}
              >
                {t("Platform advantages")}
              </a>
              <a
                href="/distribute#clients"
                className={styles.links__block_item}
              >
                {t("Clients")}
              </a>
            </div>

            <div className={styles.links__block}>
              <a
                href="/usage"
                className={classNames([
                  styles.links__block_title,
                  styles.links__block_title_hoverable,
                ])}
              >
                {t("Technology")}
              </a>
              <a
                href="/usage#directions"
                className={classNames([styles.links__block_item])}
              >
                {t("Directions")}
              </a>
              <a
                href="/usage#cases"
                className={classNames([styles.links__block_item])}
              >
                {t("Cases")}
              </a>
              <a href="/usage#advantages" className={styles.links__block_item}>
                {t("Advantages")}
              </a>
            </div>

            <div className={styles.links__block}>
              <div className={styles.links__block_title}>{t("Company")}</div>
              <a href="/about" className={styles.links__block_item}>
                {t("About Us")}
              </a>
              <div
                onClick={() => setContactFormOpen(true)}
                className={styles.links__block_item}
              >
                {t("Contact Us")}
              </div>
            </div>

            <div className={styles.links__block}>
              <div className={styles.links__block_title}>{t("Products")}</div>
              <a href="#" className={styles.links__block_item}>
                {t("Sonar")}
              </a>
              <a href="#" className={styles.links__block_item}>
                {t("Wallet")}
              </a>
              <a href="#" className={styles.links__block_item}>
                {t("Pro-dashboard")}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.end}>
          <div className={"container"}>
            <div className={styles.end__text}>
              © 2024 Stels Ltd. | All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
