import { useAppSelector } from "../hooks/hooks";

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cartSlice);

  return (
    <div className="p-2 flex flex-col items-center w-full h-screen">
      <h2 className="text_stroke m-2 drop-shadow-2xl font-extrabold text-white font-mono text-3xl">
        Корзина
      </h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex my-1 w-full rounded bg-white drop-shadow-2xl border-black border-2"
        >
          <img src={item.img} alt="" className="w-2/6 h-40 object-cover" />
          <div className="w-4/6 p-2">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
