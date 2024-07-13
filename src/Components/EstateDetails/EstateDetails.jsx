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
    img,
    description,
    title,
    status,
    location,
    area,
    segment_name,
    price,
  } = val;
  return (
    <div>
      <h2>hello:{id}</h2>
      <img src={img} alt="" srcset="" />
      <h1>title:{title}</h1>
      <p>{description}</p>
      <p>{status}</p>
      <p>{location}</p>
      <p>{area}</p>
    </div>
  );
};

export default EstateDetails;
