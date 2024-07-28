import { useParams } from "react-router-dom";

const Item = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="flex justify-center items-center">
      <div className="rounded bg-white drop-shadow-2xl border-black border-2">
        dsadasd
      </div>
    </div>
  );
};
export default Item;
