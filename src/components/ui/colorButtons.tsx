import React from "react";
import CircleColor from "./circleColor";
const colorButtons: React.FC<{
  colors: string[][];
  size: number;
  changeColor: ((value: number) => void) | null;
  colorActive: number | null;
}> = ({ colors, size, changeColor, colorActive }) => {
  return (
    <div className="flex">
      {colors.map((color, index) => (
        <div
          className={
            colorActive !== null && colorActive === index
              ? "border-2  border-red-400 rounded-full  p-1 bg-white"
              : "p-1"
          }
          key={index}
          onClick={() => {
            if (changeColor) {
              changeColor(index);
            }
          }}
        >
          <CircleColor color={color} size={size} />
        </div>
      ))}
    </div>
  );
};

export default colorButtons;
