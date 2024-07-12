import React from "react";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>hello:{id}</h2>
    </div>
  );
};

export default EstateDetails;
