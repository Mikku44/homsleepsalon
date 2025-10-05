import React, { type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ReusableSwiperProps {
  children: ReactNode[];            // slides
  direction?: "horizontal" | "vertical";
  pagination?: boolean;
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
  paginationClickable?: boolean;
}

const ReusableSwiper: React.FC<ReusableSwiperProps> = ({
  children,
  direction = "horizontal",
  pagination = true,
  className,
  spaceBetween = 0,
  slidesPerView = 1,
  paginationClickable = true,
}) => {
  return (
    <Swiper
      direction={direction}
      pagination={pagination ? { clickable: paginationClickable } : undefined}
      modules={[Pagination]}
      className={className}
      effect={'fade'}
      autoplay={true}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReusableSwiper;
