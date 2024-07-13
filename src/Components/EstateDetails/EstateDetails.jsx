import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const data = useLoaderData();
  console.log(data);
  //   const val = useParams();
  const { id } = useParams();
  console.log(id);
  const val = data.find((x) => x.id == id);
  console.log(val);
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
  } = val;
  return (
    <div>
      <h2>{location}</h2>
      <p>BDT:{price}</p>
      <img src={p_img} alt="" srcset="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{status}</p>
      <p>{facilities}</p>
      <p>{area}</p>
    </div>
  );
};

export default EstateDetails;
