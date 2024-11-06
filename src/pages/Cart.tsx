import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { downQuantity, upQuantity } from "../redux/cartSlice";

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  const ClickUpQuantity = (value: number) => {
    dispatch(upQuantity(cartItems[value].id));
  };
  const ClickDownQuantity = (value: number) => {
    dispatch(downQuantity(cartItems[value].id));
  };

  return (
    <div className="p-2 flex flex-col items-center w-full h-screen text-lg font-bold ">
      <div className="flex items-center justify-between w-full">
        <Link to="-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
          </svg>
        </Link>
        <h2 className="text_stroke m-2 drop-shadow-2xl font-extrabold text-black font-mono text-3xl">
          Корзина
        </h2>
      </div>
      {cartItems.map((item, index) => (
        <div
          key={item.id}
          className="flex my-1 w-full h-40 rounded bg-white drop-shadow-2xl border-black border-2"
        >
          <img src={item.img} alt="" className="w-32 h-full object-cover" />
          <div className="w-7/12 p-2 flex-col flex justify-between">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3>{item.name}</h3>
                {item.size}, {item.color}
              </div>
              <div className="flex items-center justify-center">
                <svg
                  onClick={() => {
                    ClickDownQuantity(index);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-patch-minus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1" />
                </svg>
                <h1 className="px-2">{item.quantity}</h1>
                <svg
                  onClick={() => {
                    ClickUpQuantity(index);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-patch-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
                </svg>
              </div>
            </div>
            <div className="justify-end flex mt-2">
              {item.price * item.quantity} Р
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
