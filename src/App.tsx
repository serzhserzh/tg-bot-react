import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
// import Cart from "./pages/Cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";

// Import the necessary library
import { Telegram } from "telegram-web-app";

// ... previous code remains the same

// Fix the error by importing Telegram from the correct library
const tg = window.Telegram as typeof Telegram.WebApp;
function App() {
  return (
    <Provider store={store}>
      <div className=" w-full min-h-full overflow-hidden bg-black transition-transform  w-fullbg-hero-power error-effect">
        <Routes>
          <Route path="*" element={<Home />} />
          {/* <Route path="Cart" element={<Cart />} /> */}
          <Route path="item/:id" element={<Item />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
