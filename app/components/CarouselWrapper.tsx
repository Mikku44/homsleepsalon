import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselWrapperProps {
  items: React.ReactNode[];
  deviceType?: "desktop" | "tablet" | "mobile";
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  infinite?: boolean;
  showDots?: boolean;
  removeArrowOnDeviceType?: ("desktop" | "tablet" | "mobile")[];
  itemClass?: string;
  containerClass?: string;
  dotListClass?: string;
}

const defaultResponsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  items,
  deviceType = "desktop",
  autoPlay = true,
  autoPlaySpeed = 3000,
  infinite = true,
  showDots = true,
  removeArrowOnDeviceType = ["tablet", "mobile"],
  itemClass = "carousel-item-padding-40-px",
  containerClass = "carousel-container",
  dotListClass = "custom-dot-list-style",
}) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={showDots}
      responsive={defaultResponsive}
      infinite={infinite}
      autoPlay={autoPlay && deviceType !== "mobile"}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass={containerClass}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      deviceType={deviceType}
      dotListClass={dotListClass}
      itemClass={itemClass}
    >
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Carousel>
  );
};

export default CarouselWrapper;
