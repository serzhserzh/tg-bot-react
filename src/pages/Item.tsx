import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { fetchItem, Items } from "../redux/itemSlice";
import ColorButtons from "../components/ui/colorButtons";
import { CarouselDemo } from "../components/ui/Slider";
import { addToCart } from "../redux/cartSlice";

const Item = () => {
  const { items } = useAppSelector((state) => state.itemSlice);
  const dispatch = useAppDispatch();

  const [item, setItem] = useState<Items | null>(null);
  const [colorActive, setColorActtive] = useState(0);
  const [sizeActive, setSizeActtive] = useState(0);

  const params = useParams();
  useEffect(() => {
    items.forEach((value) =>
      value.id === Number(params.id) ? setItem(value) : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    if (items.length == 0) {
      dispatch(fetchItem());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const tg = window.Telegram?.WebApp;
  // const byItemsFetch = () => {
  //   console.log("отправляю");
  //   const userName = tg.initDataUnsafe.user.username;
  //   fetch(
  //     `https://api.telegram.org/bot7893066097:AAEEbvbF_p5o46-O8sv23H263pn-t2O0S3w/sendMessage`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         chat_id: "@sneakersBo",
  //         text: `@${userName}      Item:${item?.name}`,
  //       }),
  //     }
  //   );
  // };

  const changeColor = (value: number) => {
    setColorActtive(value);
  };
  const changeSize = (value: number) => {
    setSizeActtive(value);
  };

  //Добавление товара в корзину
  const addItemCart = () => {
    if (item) {
      const obj = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img[0][0],
        size: item.sizes[sizeActive],
        color: item.colors[colorActive],
      };
      dispatch(addToCart(obj));
    }
  };
  return (
    item !== null && (
      <div className="p-2 flex flex-col justify-center items-center w-full">
        <div className="relative rounded drop-shadow-2xl border-black border-2 bg_white_opacity">
          <CarouselDemo img={item.img[0]} styles="w-full" />
          <Link to="/" className="absolute  w-10 h-10 left-4 top-4  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="black"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </Link>
        </div>
        <div className="text_stroke m-4 drop-shadow-2xl font-extrabold text-white font-mono text-3xl">
          {item.name}
        </div>

        <div className="w-full p-4 rounded drop-shadow-2xl border-black border-2 bg_white_opacity">
          <div className="font-medium overflow-hidden">
            <h2>Размеры в наличии:</h2>
            <div className="flex my-2 overflow-x-auto pb-2">
              {item.sizes.map((value, index) => (
                <div
                  className={`border-solid rounded-full border min-w-7 min-h-7 mr-2 border-black  flex justify-center ${
                    sizeActive === index ? "bg-black text-white" : ""
                  }`}
                  onClick={() => {
                    changeSize(index);
                  }}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          <h2 className="my-2 font-medium">Цвета в наличии :</h2>
          <ColorButtons
            colors={item.colors}
            size={28}
            changeColor={changeColor}
            colorActive={colorActive}
          />
          <button
            onClick={() => addItemCart()}
            className="w-full text-white font-extrabold text-xl my-4 p-4 rounded drop-shadow-2xl border-black border-2 bg_black_opacity"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    )
  );
};

export default Item;
