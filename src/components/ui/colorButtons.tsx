import React from "react";
import CircleColor from "./circleColor";
const colorButtons: React.FC<{ colors: string[][]; size: number }> = ({
  colors,
  size,
}) => {
  return (
    <div className="flex my-2">
      {colors.map((color, index) => (
        <div className="mr-1" key={index}>
          <CircleColor color={color} size={size} />
        </div>
      ))}
    </div>
  );
};

export default colorButtons;
