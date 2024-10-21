import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen p-2">
      <h1 className="text_stroke m-4 drop-shadow-2xl font-extrabold text-white font-mono text-3xl">
        Корзина
      </h1>
      <div className="w-full p-2 rounded drop-shadow-2xl border-black border-2 bg_white_opacity">
        <div className="flex items-center">
          <img
            src="/adidas_samba/fff/1.jpg"
            className="h-40 rounded drop-shadow-2xl border-black border-2 bg_white_opacity"
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x-circle-fill absolute top-3 right-3"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
          <div className="w-full pl-4 flex flex-col">
            <h2>Adidas Samba</h2>
            <div className="flex mb-4">
              <h2>37</h2>
              <h2>color</h2>
            </div>

            <h1>30 000 P</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
