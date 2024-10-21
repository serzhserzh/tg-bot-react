import React from "react";
import { VictoryPie } from "victory-pie";

const CircleColor: React.FC<{ color: string[]; size: number }> = ({
  color,
  size,
}) => {
  type Mydata = {
    y: number;
  };
  const myData: Mydata[] = [];

  console.log(color);
  if (color.length === 1) {
    myData.push({ y: 1 });
  }
  if (color.length === 2) {
    myData.push({ y: 1 });
    myData.push({ y: 1 });
  }
  if (color.length === 3) {
    myData.push({ y: 1 });
    myData.push({ y: 1 });
    myData.push({ y: 1 });
    console.log(myData);
  }

  return (
    <div className=" border rounded-full border-black">
      <VictoryPie
        width={size}
        height={size}
        data={myData}
        labels={() => null}
        colorScale={color}
        radius={size / 2}
      />
    </div>
  );
};

export default CircleColor;
