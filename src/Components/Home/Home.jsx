import React from "react";
import Slider from "../Slider/Slider";
import Estates from "../Estates/Estates";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const properties = useLoaderData();
  console.log(properties);
  return (
    <div>
      <Slider></Slider>
      {/* estates component e 9t card show korbe */}
      <div className="grid grid-cols-3 gap-2 m-4  items-center justify-center w-[100%] p-4">
        {properties.map((p) => (
          <Estates key={p.id} estate={p}></Estates>
        ))}
      </div>
      {/* <Estates></Estates> */}
    </div>
  );
};

export default Home;
