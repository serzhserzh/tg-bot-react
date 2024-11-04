import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

// Import the necessary type definition for Telegram Web App
declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

const tg = window.Telegram?.WebApp;

function App() {
  useEffect(() => {
    tg.expand();
    tg.ready();
  });
  return (
    <Provider store={store}>
      <div className=" w-full min-h-full overflow-hidden bg-black transition-transform  w-fullbg-hero-power error-effect">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="item/:id" element={<Item />} />
        </Routes>
      </div>
      <Link
        to="/Cart"
        className=" bg-blue-700/70 p-2 rounded-full fixed bottom-5 right-5 "
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
    </Provider>
  );
}

export default App;
