import React from "react";
import Slider from "../Slider/Slider";
import Estates from "../Estates/Estates";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* estates component e 9t card show korbe */}
      <Estates></Estates>
    </div>
  );
};

export default Home;
