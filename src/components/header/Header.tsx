import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import Button from "../Button/Button";

import eventEmitter from "../../eventEmitter.ts";
import Graphite from "../Graphite/Graphite";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);

  eventEmitter.subscribe("contact", () => {
    setContactFormOpen(true);
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    // const localLanguage = window.navigator?.language?.split("-")[0];
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    // else if (localLanguage) {
    //     i18n.changeLanguage(localLanguage);
    // }

    const keyupHandler = (e: any) => {
      if (e.key === "Escape") {
        setContactFormOpen(false);
      }
    };
    window.addEventListener("keyup", keyupHandler);
    return () => {
      window.removeEventListener("keyup", keyupHandler);
    };
  }, [i18n]);
  

  //   const changeLanguageHandler = (lang: string) => {
  //     i18n.changeLanguage(lang);
  //     localStorage.setItem("language", lang);
  //   };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tg, setTg] = useState("");
  const [request, setRequest] = useState("");
  const [error, setError] = useState("");
  const [contactBtnText, setContactBtnText] = useState(t("Send"));

  
  const submitHandler = () => {
    if (!name || !request || !(email || tg)) {
      setError(t("contact_error_text"));
      return;
    }
    try {
      fetch(`/request.php`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          tg,
          request,
        }),
      });
    } catch (err) {
      console.error(error);
    }

    setEmail("");
    setName("");
    setTg("");
    setRequest("");
    setError("");
    setContactBtnText(t("Sended"));
  };

  useEffect(() => {
    if (name || email || tg || request) {
      setContactBtnText(t("Send"));
    }
  }, [name, email, tg, request, t]);

  const [menuState, setMenuState] = useState({
    company: false,
    products: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (contactFormOpen || mobileMenuOpen) {
      document.body.classList.add('no_scroll');
    } else {
      document.body.classList.remove('no_scroll');
    }

    // Cleanup function to ensure the class is removed when the component is unmounted
    return () => {
      document.body.classList.remove('no_scroll');
    };
  }, [contactFormOpen, mobileMenuOpen]);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__part}>
            <a href="/" className={styles.header__logo}>
              <div style={{ display: "flex", alignItems: "center" }}>
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

          <div
            className={classNames([
              styles.header__part,
              styles.header__actions,
              mobileMenuOpen && styles.header__actions_open,
            ])}
          >
            <nav className={styles.header__nav}>
              <div
                className={classNames([styles.header__nav_item])}
                onClick={() => {
                  setMenuState({
                    company: false,
                    products: false,
                  });
                }}
              >
                <a href="/#service" className="hover">
                  {t("Markets")}
                </a>
              </div>

              <div
                className={classNames([styles.header__nav_item])}
                onClick={() => {
                  setMenuState({
                    company: false,
                    products: false,
                  });
                }}
              >
                <a href="/#distribute" className="hover">
                  {t("Assets")}
                </a>
              </div>

              <div
                className={classNames([styles.header__nav_item])}
                onClick={() => {
                  setMenuState({
                    company: false,
                    products: false,
                  });
                }}
              >
                <a href="/#usage" className="hover">
                  {t("Technology")}
                </a>
              </div>

              <div
                className={classNames([styles.header__nav_item])}
                onClick={() => {
                  setMenuState({
                    company: !menuState.company,
                    products: false,
                  });
                }}
              >
                <div className="hover">{t("Company")}</div>
                <div
                  className={styles.header__nav_item_extra_wrapper}
                  style={{
                    display:
                      menuState.company || window.innerWidth > 980
                        ? "block"
                        : "none",
                  }}
                >
                  <div className={styles.header__nav_item_extra}>
                    <a
                      href="/#about"
                      className={classNames([
                        styles.header__nav_item_extra_item,
                        "hover",
                      ])}
                    >
                      {/* <div className={styles.header__nav_item_extra_item_icon}>
                                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="11" width="5" height="7" rx="2.5" fill="#FF7A00" />
                                                    <rect width="5" height="12" rx="2.5" transform="matrix(1 0 0 -1 8 18)" fill="#FF7A00" />
                                                    <rect width="5" height="18" rx="2.5" transform="matrix(1 0 0 -1 16 18)" fill="#FF7A00" />
                                                </svg>
                                            </div> */}
                      <div
                        className={
                          styles.header__nav_item_extra_item_text_wrapper
                        }
                      >
                        <div
                          className={styles.header__nav_item_extra_item_title}
                        >
                          {t("About us")}
                        </div>
                        {/* <div className={styles.header__nav_item_extra_item_text}>{t("Explore market making and liquidity management technology")}</div> */}
                      </div>
                    </a>
                    <div
                      onClick={() => setContactFormOpen(true)}
                      className={classNames([
                        styles.header__nav_item_extra_item,
                        "hover",
                      ])}
                    >
                      {/* <div className={styles.header__nav_item_extra_item_icon}>
                                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="11" width="5" height="7" rx="2.5" fill="#FF7A00" />
                                                    <rect width="5" height="12" rx="2.5" transform="matrix(1 0 0 -1 8 18)" fill="#FF7A00" />
                                                    <rect width="5" height="18" rx="2.5" transform="matrix(1 0 0 -1 16 18)" fill="#FF7A00" />
                                                </svg>
                                            </div> */}
                      <div
                        className={
                          styles.header__nav_item_extra_item_text_wrapper
                        }
                      >
                        <div
                          className={styles.header__nav_item_extra_item_title}
                        >
                          {t("Contact Us")}
                        </div>
                        {/* <div className={styles.header__nav_item_extra_item_text}>{t("Explore market making and liquidity management technology")}</div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames([
                    styles.header__nav_item_arrow,
                    menuState.company && styles.header__nav_item_arrow_active,
                  ])}
                >
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 1L9 9L1 1" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div
                className={classNames([styles.header__nav_item])}
                onClick={() => {
                  setMenuState({
                    company: false,
                    products: !menuState.products,
                  });
                }}
              >
                <div className="hover">{t("Products")}</div>
                <div
                  className={styles.header__nav_item_extra_wrapper}
                  style={{
                    display:
                      menuState.products || window.innerWidth > 980
                        ? "block"
                        : "none",
                  }}
                >
                  <div className={styles.header__nav_item_extra}>
                    <a
                      href="https://sonar.stels.dev"
                      target="_blank"
                      className={classNames([
                        styles.header__nav_item_extra_item,
                        "hover",
                      ])}
                    >
                      {/* <div className={styles.header__nav_item_extra_item_icon}>
                                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="11" width="5" height="7" rx="2.5" fill="#FF7A00" />
                                                    <rect width="5" height="12" rx="2.5" transform="matrix(1 0 0 -1 8 18)" fill="#FF7A00" />
                                                    <rect width="5" height="18" rx="2.5" transform="matrix(1 0 0 -1 16 18)" fill="#FF7A00" />
                                                </svg>
                                            </div> */}
                      <div
                        className={
                          styles.header__nav_item_extra_item_text_wrapper
                        }
                      >
                        <div
                          className={styles.header__nav_item_extra_item_title}
                        >
                          {t("Sonar")}
                        </div>
                        {/* <div className={styles.header__nav_item_extra_item_text}>{t("Explore market making and liquidity management technology")}</div> */}
                      </div>
                    </a>

                    <a
                      href="https://card.stels.dev"
                      target="_blank"
                      className={classNames([
                        styles.header__nav_item_extra_item,
                        "hover",
                      ])}
                    >
                      {/* <div className={styles.header__nav_item_extra_item_icon}>
                                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="11" width="5" height="7" rx="2.5" fill="#FF7A00" />
                                                    <rect width="5" height="12" rx="2.5" transform="matrix(1 0 0 -1 8 18)" fill="#FF7A00" />
                                                    <rect width="5" height="18" rx="2.5" transform="matrix(1 0 0 -1 16 18)" fill="#FF7A00" />
                                                </svg>
                                            </div> */}
                      <div
                        className={
                          styles.header__nav_item_extra_item_text_wrapper
                        }
                      >
                        <div
                          className={styles.header__nav_item_extra_item_title}
                        >
                          {t("Wallet")}
                        </div>
                        {/* <div className={styles.header__nav_item_extra_item_text}>{t("Explore market making and liquidity management technology")}</div> */}
                      </div>
                    </a>

                    <a
                      href="https://pro.stels.dev"
                      target="_blank"
                      className={classNames([
                        styles.header__nav_item_extra_item,
                        "hover",
                      ])}
                    >
                      {/* <div className={styles.header__nav_item_extra_item_icon}>
                                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="11" width="5" height="7" rx="2.5" fill="#FF7A00" />
                                                    <rect width="5" height="12" rx="2.5" transform="matrix(1 0 0 -1 8 18)" fill="#FF7A00" />
                                                    <rect width="5" height="18" rx="2.5" transform="matrix(1 0 0 -1 16 18)" fill="#FF7A00" />
                                                </svg>
                                            </div> */}
                      <div
                        className={
                          styles.header__nav_item_extra_item_text_wrapper
                        }
                      >
                        <div
                          className={styles.header__nav_item_extra_item_title}
                        >
                          {t("Pro-dashboard")}
                        </div>
                        {/* <div className={styles.header__nav_item_extra_item_text}>{t("Explore market making and liquidity management technology")}</div> */}
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className={classNames([
                    styles.header__nav_item_arrow,
                    menuState.products && styles.header__nav_item_arrow_active,
                  ])}
                >
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 1L9 9L1 1" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* <div className={classNames([styles.header__nav_item])}>
                                <a href="" className="hover">
                                    {t("Docs")}
                                </a>
                            </div> */}
            </nav>
            {/* <div className={classNames([styles.header__lang_select])}>
                            <div
                                className={classNames(["hover", styles.header__lang_select_main])}
                                onClick={() => {
                                    setMenuState({ services: false, company: false, customers: false, langs: !menuState.langs });
                                }}
                            >
                                <div className={styles.header__lang_select_main_icon}>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="9.665" stroke="white" strokeWidth="1.67" />
                                        <path
                                            d="M15.165 10.5C15.165 13.2924 14.5703 15.7791 13.6494 17.5372C12.7078 19.3348 11.5525 20.165 10.5 20.165C9.44754 20.165 8.29221 19.3348 7.35058 17.5372C6.42967 15.7791 5.835 13.2924 5.835 10.5C5.835 7.70758 6.42967 5.22093 7.35058 3.46282C8.29221 1.66517 9.44754 0.835 10.5 0.835C11.5525 0.835 12.7078 1.66517 13.6494 3.46282C14.5703 5.22093 15.165 7.70758 15.165 10.5Z"
                                            stroke="white"
                                            strokeWidth="1.67"
                                        />
                                        <path d="M2 7H19" stroke="white" strokeWidth="1.67" />
                                        <path d="M2 14H19" stroke="white" strokeWidth="1.67" />
                                    </svg>
                                </div>
                                <div className={styles.header__lang_select_main_text}>{i18n.language}</div>
                                <div
                                    className={styles.header__lang_select_main_arrow}
                                    style={{
                                        transform: menuState.langs && "rotate(180deg)",
                                    }}
                                >
                                    {window.innerWidth < 980 ? (
                                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1L9 9L1 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    ) : (
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 1L7 7L1 1" stroke="white" strokeWidth="1.67" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {(menuState.langs || window.innerWidth > 980) && (
                                <div className={styles.header__lang_select_variants}>
                                    <div className={styles.header__lang_select_variants_arrow}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L0 8L8 16L16 8L8 0Z" fill="#1C1C1C" />
                                        </svg>
                                    </div>
                                    <div
                                        className={classNames(["hover", styles.header__lang_select_variant])}
                                        onClick={() => {
                                            changeLanguageHandler("en");
                                        }}
                                    >
                                        English
                                    </div>
                                    <div
                                        className={classNames(["hover", styles.header__lang_select_variant])}
                                        onClick={() => {
                                            changeLanguageHandler("ru");
                                        }}
                                    >
                                        Russian
                                    </div>
                                    <div
                                        className={classNames(["hover", styles.header__lang_select_variant])}
                                        onClick={() => {
                                            changeLanguageHandler("ch");
                                        }}
                                    >
                                        Chinese
                                    </div>
                                    <div
                                        className={classNames(["hover", styles.header__lang_select_variant])}
                                        onClick={() => {
                                            changeLanguageHandler("kr");
                                        }}
                                    >
                                        Korean
                                    </div>
                                </div>
                            )}
                        </div> */}
            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
              {/* <Button arrow grey style={{ width: window.innerWidth > 980 ? "180px" : "100%", borderRadius: "32px" }}>
                                {t("Try Sonar")}
                            </Button> */}
              {/*<Button style={{ width: window.innerWidth > 980 ? "128px" : "100%", borderRadius: "32px" }}>{t("Log In")}</Button>*/}
            </div>
          </div>
          <div
            className={styles.header__menu_btn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L19 19" stroke="white" strokeWidth="2" />
                <path d="M19 1L0.999998 19" stroke="white" strokeWidth="2" />
              </svg>
            ) : (
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="2" rx="1" fill="white" />
                <rect y="7" width="24" height="2" rx="1" fill="white" />
                <rect y="14" width="24" height="2" rx="1" fill="white" />
              </svg>
            )}
          </div>
        </div>
      </header>
      {contactFormOpen && (
        <div className={classNames([styles.contact])}>
          <div className={styles.contact__head}>
            <div
              className={classNames([
                styles.contact__head_content,
                "container",
                "tablet_container",
              ])}
            >
              <div  style={{ display: "flex", alignItems: "center", opacity:"0.9" }}>
                <div>
                  <Graphite primary={"var(--stels-color-orange)"} />
                </div>
                <div>
                  <div>
                    <span style={{ fontSize: 20, fontWeight: 600 }}>STELS</span>
                  </div>
                </div>
              </div>
              <div
                className={classNames([styles.contact__head_close, "hover"])}
                onClick={() => setContactFormOpen(false)}
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" fill="black" />
                  <path d="M12 12L44 44" stroke="white" strokeWidth="2" />
                  <path d="M44 12L12 44" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className={classNames([styles.contact__content, "container","tablet_container"])}>
            <div className={styles.contact__title}>{t("contact_title")}</div>
            <div className={styles.contact__form}>
              <div className={styles.contact__input_wrapper}>
                <div className={styles.contact__input_label}>Name</div>
                <input
                  className={styles.contact__input}
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.contact__input_wrapper}>
                <div className={styles.contact__input_label}>Email</div>
                <input
                  className={styles.contact__input}
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.contact__input_wrapper}>
                <div className={styles.contact__input_label}>Telegram ID</div>
                <input
                  className={styles.contact__input}
                  placeholder="Enter your Telegram ID"
                  value={tg}
                  onChange={(e) => setTg(e.target.value)}
                />
              </div>
              <div className={styles.contact__input_wrapper}>
                <div className={styles.contact__input_label}>Request</div>
                <textarea
                  className={styles.contact__textarea}
                  placeholder="Enter your request"
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={styles.contact__btn}>
              {error && <div className={styles.contact__error}>{error}</div>}
              <Button
                style={{
                  width: "100%",
                }}
                arrow
                onClick={submitHandler}
              >
                {contactBtnText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
