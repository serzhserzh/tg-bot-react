import { Link, useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { fetchItem, Items } from "../redux/itemSlice";
import ColorButtons from "../components/ui/colorButtons";
import { CarouselDemo } from "../components/ui/Slider";
import { addToCart } from "../redux/cartSlice";
import Accordion from "../components/ui/accordion";

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
          <div className="text_stroke  drop-shadow-2xl font-extrabold text-black font-mono text-2xl w-full text-center mb-6">
            {item.name}
          </div>
          <div className="mb-2 text-2xl drop-shadow-2xl font-extrabold text-black font-mono flex">
            {item.price}
            <svg
              className="ml-0.5"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <g id="surface1">
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(100%,84.313726%,32.941177%)",
                    fillOpacity: 1,
                  }}
                  d="M 30.5 16 C 30.5 7.992188 24.007812 1.5 16 1.5 C 7.992188 1.5 1.5 7.992188 1.5 16 C 1.5 24.007812 7.992188 30.5 16 30.5 C 24.007812 30.5 30.5 24.007812 30.5 16 Z M 30.5 16 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(92.941177%,72.549021%,4.705882%)",
                    fillOpacity: 1,
                  }}
                  d="M 27.5 16 C 27.5 9.648438 22.351562 4.5 16 4.5 C 9.648438 4.5 4.5 9.648438 4.5 16 C 4.5 22.351562 9.648438 27.5 16 27.5 C 22.351562 27.5 27.5 22.351562 27.5 16 Z M 27.5 16 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 4.675781 14.5 C 4.527344 14.5 4.386719 14.433594 4.289062 14.320312 C 4.195312 14.207031 4.15625 14.058594 4.179688 13.914062 C 5.0625 8.949219 8.949219 5.0625 13.914062 4.179688 C 14.1875 4.132812 14.445312 4.316406 14.492188 4.585938 C 14.539062 4.859375 14.359375 5.117188 14.085938 5.164062 C 9.535156 5.972656 5.972656 9.535156 5.164062 14.085938 C 5.125 14.324219 4.917969 14.5 4.675781 14.5 Z M 4.675781 14.5 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 18 27.828125 C 17.738281 27.828125 17.523438 27.628906 17.5 27.371094 C 17.480469 27.109375 17.65625 26.878906 17.914062 26.835938 C 22.464844 26.027344 26.027344 22.464844 26.835938 17.914062 C 26.863281 17.738281 26.984375 17.589844 27.15625 17.527344 C 27.324219 17.464844 27.511719 17.5 27.648438 17.613281 C 27.785156 17.730469 27.851562 17.910156 27.820312 18.085938 C 26.9375 23.050781 23.050781 26.9375 18.085938 27.820312 C 18.058594 27.824219 18.027344 27.828125 18 27.828125 Z M 18 27.828125 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 5 16 C 5 15.722656 4.777344 15.5 4.5 15.5 C 4.222656 15.5 4 15.722656 4 16 C 4 16.277344 4.222656 16.5 4.5 16.5 C 4.777344 16.5 5 16.277344 5 16 Z M 5 16 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 16.5 4.5 C 16.5 4.222656 16.277344 4 16 4 C 15.722656 4 15.5 4.222656 15.5 4.5 C 15.5 4.777344 15.722656 5 16 5 C 16.277344 5 16.5 4.777344 16.5 4.5 Z M 16.5 4.5 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 28 16 C 28 15.722656 27.777344 15.5 27.5 15.5 C 27.222656 15.5 27 15.722656 27 16 C 27 16.277344 27.222656 16.5 27.5 16.5 C 27.777344 16.5 28 16.277344 28 16 Z M 28 16 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 16.5 27.5 C 16.5 27.222656 16.277344 27 16 27 C 15.722656 27 15.5 27.222656 15.5 27.5 C 15.5 27.777344 15.722656 28 16 28 C 16.277344 28 16.5 27.777344 16.5 27.5 Z M 16.5 27.5 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 16 31 C 9.933594 31 4.464844 27.34375 2.140625 21.742188 C -0.179688 16.136719 1.101562 9.683594 5.394531 5.394531 C 11.25 -0.464844 20.75 -0.464844 26.605469 5.394531 C 32.464844 11.25 32.464844 20.75 26.605469 26.605469 C 23.800781 29.429688 19.980469 31.011719 16 31 Z M 16 2 C 10.335938 2 5.234375 5.410156 3.066406 10.640625 C 0.898438 15.875 2.097656 21.894531 6.101562 25.898438 C 11.566406 31.367188 20.433594 31.367188 25.898438 25.898438 C 31.367188 20.433594 31.367188 11.566406 25.898438 6.101562 C 23.28125 3.464844 19.714844 1.988281 16 2 Z M 16 2 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(0%,0%,0%)",
                    fillOpacity: 1,
                  }}
                  d="M 18.5 18.5 C 18.777344 18.5 19 18.277344 19 18 C 19 17.722656 18.777344 17.5 18.5 17.5 L 15 17.5 L 15 16.5 L 18 16.5 C 19.65625 16.5 21 15.15625 21 13.5 C 21 11.84375 19.65625 10.5 18 10.5 L 14.5 10.5 C 14.222656 10.5 14 10.722656 14 11 L 14 15.5 L 13.5 15.5 C 13.222656 15.5 13 15.722656 13 16 C 13 16.277344 13.222656 16.5 13.5 16.5 L 14 16.5 L 14 17.5 L 13.5 17.5 C 13.222656 17.5 13 17.722656 13 18 C 13 18.277344 13.222656 18.5 13.5 18.5 L 14 18.5 L 14 22 C 14 22.277344 14.222656 22.5 14.5 22.5 C 14.777344 22.5 15 22.277344 15 22 L 15 18.5 Z M 20 13.5 C 20 14.605469 19.105469 15.5 18 15.5 L 15 15.5 L 15 11.5 L 18 11.5 C 19.105469 11.5 20 12.394531 20 13.5 Z M 20 13.5 "
                />
              </g>
            </svg>
          </div>
          <div className="mb-2">
            <div className="font-medium overflow-hidden">
              <h2 className="mb-1">Размеры в наличии:</h2>
              <div className="flex pb-0.5  overflow-x-auto ove  items-center">
                {item.sizes.map((value, index) => (
                  <div
                    className={` ${
                      sizeActive === index
                        ? "border-2 bg-white border-red-400 rounded-full p-1"
                        : "p-1 border-2 border-rose-900/0"
                    }`}
                  >
                    <div
                      className={`border-solid border-2  rounded-full  w-8 h-8 font-bold  border-black  flex items-center justify-center `}
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

            <h2 className=" font-medium mb-1">Цвета в наличии :</h2>
            <ColorButtons
              colors={item.colors}
              size={28}
              changeColor={changeColor}
              colorActive={colorActive}
            />
          </div>
          <Accordion />
          <button
            onClick={() => addItemCart()}
            className="w-full text-black font-extrabold text-xl  p-4 rounded drop-shadow-2xl border-black border-2 bg_black_opacity"
          >
            Добавить в корзину
          </button>
        </div>
        <Link
          to="/Cart"
          className=" bg-black/70 p-2 rounded-full fixed bottom-5 right-5 "
        >
          <svg
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
