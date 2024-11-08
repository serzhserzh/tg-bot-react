import { Link, useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
          <CarouselDemo img={item.img[0]} />
          <svg
            onClick={() => {
              navigate(-1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="black"
            className="bi bi-arrow-left absolute left-3 top-3"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </div>

        <div className="w-full m-2 p-4 rounded drop-shadow-2xl border-black border-2 bg_white_opacity">
          <div className="text_stroke  drop-shadow-2xl font-extrabold text-white font-mono text-3xl w-full text-center">
            {item.name}
          </div>
          <div className="font-medium overflow-hidden">
            <h2>Размеры в наличии:</h2>
            <div className="flex my-2 overflow-x-auto pb-2 items-center">
              {item.sizes.map((value, index) => (
                <div
                  className={`mr-1 ${
                    sizeActive === index
                      ? "border-2 bg-white border-red-400 rounded-full p-1"
                      : "p-1"
                  }`}
                >
                  <div
                    className={`border-solid border-2  rounded-full  w-8 h-8  border-black  flex items-center justify-center `}
                    onClick={() => {
                      changeSize(index);
                    }}
                  >
                    {value}
                  </div>
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
        <Link
          to="/Cart"
          className=" bg-black/70 p-2 rounded-full fixed bottom-5 right-5 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-cart2   "
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </Link>
      </div>
    )
  );
};

export default Item;
