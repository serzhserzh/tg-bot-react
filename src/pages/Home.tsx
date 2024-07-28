import { useEffect, useState } from "react";
import CardItems from "../components/CardItems";
import axios from "axios";
const Home = () => {
  const [items, setItems] = useState<ItemSlice[]>([]);
  const fetchItems = async () => {
    const { data } = await axios.get(
      "https://be8239fbb54389dd.mokky.dev/items"
    );
    setItems(data);
  };
  type ItemSlice = {
    id: number;
    name: string;
    price: number;
    sizes: number[];
    img: string[];
  };
  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="grid gap-x-2 gap-y-3 grid-cols-2 justify-items-center m-2">
        {items && items.map((item) => <CardItems key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
