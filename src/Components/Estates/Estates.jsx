import React from "react";
import { Link } from "react-router-dom";

const Estates = ({ estate }) => {
  const {
    id,
    p_img,
    description,
    title,
    status,
    area,
    segment_name,
    location,
    price,
    facilities,
  } = estate;
  console.log(estate);
  return (
    <Link to={`/estate/${id}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-40">
          <img src={p_img} alt="properties img" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          {/* <p>{description}</p> */}
          {description.length > 190 ? (
            <p>
              {description.slice(0, 190)}
              <Link
                className="text-blue-600 font-bold ml-2"
                to={`/estate/${id}`}
              >
                Read More...
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
          <div>Area:{area}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Estates;
