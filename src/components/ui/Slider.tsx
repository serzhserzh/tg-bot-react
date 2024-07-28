import * as React from "react";

import { Carousel, CarouselContent, CarouselItem } from "./Carousel";

export const CarouselDemo: React.FC<{ img: string[] }> = ({ img }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {img.map((item, index) => (
          <CarouselItem key={index}>
            <div className="">
              <img src={`${item}`} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
