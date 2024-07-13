import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const EstateDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();
  console.log(id);

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error:', error));

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((datum) => {
        const val = datum.find((x) => x.id == id);
        console.log(val);
        setData(val);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  const {
    p_img,
    description,
    title,
    status,
    location,
    area,
    segment_name,
    price,
    facilities,
  } = data;
  return (
    <div>
      <div className="m-4">
        <h2 className="text-3xl">{location}</h2>
        <p className="text-2xl">BDT:{price}</p>
      </div>
      <img
        className="w-[90%] h-auto rounded-3xl my-2 p-5 mx-auto"
        src={p_img}
        alt=""
        srcset=""
      />
      <div className="m-4">
        <h1 className="text-3xl">{title}</h1>
        <p>{description}</p>
        <p className="font-bold">{status}</p>
        <p className="text-xl">{facilities}</p>
        <p className="text-2xl">{area}</p>
      </div>
    </div>
  );
};

export default EstateDetails;
