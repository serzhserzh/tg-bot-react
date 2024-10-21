import * as React from "react";

import { Carousel, CarouselContent, CarouselItem } from "./Carousel";

export const CarouselDemo: React.FC<{ img: string[]; styles: string }> = ({
  img,
  styles,
}) => {
  return (
    <Carousel className="w-full error-effect">
      <CarouselContent>
        {img.map((item, index) => (
          <CarouselItem key={index}>
            <div className="">
              <img
                src={`${item}`}
                alt=""
                className={`object-cover ${styles}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
