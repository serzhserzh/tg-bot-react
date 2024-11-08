import React from "react";
import { Link } from "react-router-dom";
import ColorButtons from "./ui/colorButtons";
import { Items } from "../redux/itemSlice";

const CardItems: React.FC<Items> = ({ id, name, price, img, colors }) => {
  return (
    <div className=" w-full rounded bg-white drop-shadow-2xl border-black border-2">
      <Link to={`/item/${id}`}>
        <img
          src={`${img[0][0]}`}
          alt=""
          className=" w-full object-cover h-52 "
        />
      </Link>
      <div className="p-2">
        <Link
          to={`/item/${id}`}
          className=" inline-block text-base font-semibold h-10 mb-4"
        >
          <h1 className="whitespace-nowrap">{name}</h1>
          <span>qq</span>
        </Link>
        <div className="flex  items-center   mb-2">
          <span className="text-xs mr-2">Цвета</span>
          <ColorButtons
            colors={colors}
            size={20}
            changeColor={null}
            colorActive={null}
          />
        </div>
        <Link to={`/item/${id}`} className="text-lg font-bold mb-1">
          {price} ₽
        </Link>
      </div>
    </div>
  );
};

export default CardItems;
