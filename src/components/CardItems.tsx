import React from "react";
import { Link } from "react-router-dom";
import { CarouselDemo } from "./ui/Slider";
import ColorButtons from "./ui/colorButtons";
import { Items } from "../redux/itemSlice";

const CardItems: React.FC<Items> = ({
  id,
  name,
  price,
  img,
  colors,
  sizesCard,
}) => {
  return (
    <div className=" w-full rounded bg-white drop-shadow-2xl border-black border-2">
      <Link to={`/item/${id}`}>
        <CarouselDemo img={img[0]} styles="w-full h-52" />
      </Link>
      <div className="p-2">
        <Link to={`/item/${id}`} className=" inline-block text-lg font-bold ">
          {name}
        </Link>
        <div className="flex items-center justify-between  mb-2">
          <div className="font-medium"> {sizesCard}</div>
          <ColorButtons colors={colors} size={16} />
        </div>
        <Link to={`/item/${id}`} className="text-lg font-medium">
          {price} ₽
        </Link>
      </div>
    </div>
  );
};

export default CardItems;
