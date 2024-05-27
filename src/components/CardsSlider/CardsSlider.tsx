import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CardsSliderType = {
  children: ReactNode[];
};

const CardsSlider = ({ children }: CardsSliderType) => {
  if (window.innerWidth < 701) {
    return (
      <Swiper
        slidesPerView={"auto"}
        direction="horizontal"
        spaceBetween={12}
        style={{
          width: "calc(100% + var(--sides-padding))",
        }}
      >
        {children.map((card, idx) => {
          return (
            <SwiperSlide
              key={idx}
              style={{
                width: "fit-content",
              }}
            >
              {card}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  return children;
};
export default CardsSlider;
