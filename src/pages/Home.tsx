import { useEffect } from "react";
import CardItems from "../components/CardItems";
import { fetchItem } from "../redux/itemSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
const Home = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.itemSlice);

  useEffect(() => {
    dispatch(fetchItem());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="grid gap-x-2 gap-y-3 grid-cols-2 justify-items-center m-1">
        {items && items.map((item) => <CardItems key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
