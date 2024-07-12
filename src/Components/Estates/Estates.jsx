import React from "react";
import { Link } from "react-router-dom";

const Estates = ({ estate }) => {
  const { id, img, description, title } = estate;
  console.log(estate);
  return (
    <Link to={`/estate/${id}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>{description}</p> */}
          {description.length > 200 ? (
            <p>
              {description.slice(0, 200)}
              <Link className="text-blue-600 font-bold" to={`/estate/${id}`}>
                Read More...
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Estates;
