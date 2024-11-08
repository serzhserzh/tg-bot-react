import { useEffect } from "react";
import CardItems from "../components/CardItems";
import { fetchItem } from "../redux/itemSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.itemSlice);

  useEffect(() => {
    dispatch(fetchItem());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className=" grid gap-x-2 gap-y-3 grid-cols-2 justify-items-center m-1">
        {items && items.map((item) => <CardItems key={item.id} {...item} />)}
        <Link
          to="/Cart"
          className=" bg-black/70 p-2 rounded-full fixed bottom-5 right-5 "
        >
          <svg
            width="24"
            height="24"
            fill="white"
            className="bi bi-cart2   "
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Home;
