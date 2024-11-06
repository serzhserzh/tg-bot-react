import "./App.css";
import { Route, Routes } from "react-router-dom";
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
    </Provider>
  );
}

export default App;
