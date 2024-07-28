import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden bg-black transition-transform  w-fullbg-hero-power error-effect">
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="item/:id" element={<Item />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
