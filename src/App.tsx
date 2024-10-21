import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
// import Cart from "./pages/Cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";

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
