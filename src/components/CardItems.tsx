import React from "react";
import { Link } from "react-router-dom";
import { CarouselDemo } from "./ui/Slider";

const CardItems: React.FC<{
  id: number;
  name: string;
  price: number;
  sizes: number[];
  img: string[];
}> = ({ id, name, price, img, sizes }) => {
  return (
    <div className=" w-full rounded bg-white drop-shadow-2xl border-black border-2">
      <Link to={`/item/${id}`} className="">
        <CarouselDemo img={img} />
        <div className="p-2">
          <div>{price} ₽</div>
          <div className="">{name}</div>
          <div>Sizes: {sizes}</div>
        </div>
      </Link>
    </div>
  );
};

export default CardItems;
