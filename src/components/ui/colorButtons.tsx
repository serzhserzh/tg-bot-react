import React from "react";
import CircleColor from "./circleColor";
const colorButtons: React.FC<{
  colors: string[][];
  size: number;
  changeColor: (value: number) => void;
  colorActive: number;
}> = ({ colors, size, changeColor, colorActive }) => {
  return (
    <div className="flex my-2">
      {colors.map((color, index) => (
        <div
          className={
            colorActive === index ? "border-b-2  border-black  p-1" : "p-1"
          }
          key={index}
          onClick={() => {
            changeColor(index);
          }}
        >
          <CircleColor color={color} size={size} />
        </div>
      ))}
    </div>
  );
};

export default colorButtons;
