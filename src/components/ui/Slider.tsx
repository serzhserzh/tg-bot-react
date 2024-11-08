import * as React from "react";

import { Carousel, CarouselContent, CarouselItem } from "./Carousel";

export const CarouselDemo: React.FC<{ img: string[] }> = ({ img }) => {
  return (
    <Carousel className="">
      <CarouselContent>
        {img.map((item, index) => (
          <CarouselItem key={index}>
            <div className="">
              <img
                src={`${item}`}
                alt=""
                className={`object-cover w-full h-96`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
