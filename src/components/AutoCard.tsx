import React from "react";
import { CarType } from "../types";
import Link from "next/link";

const AutoCard: React.FC<CarType> = (car) => {
  return (
    <Link href={`/cars/${car.id}`}>
      <div className="col-2 mb-4">
        <a className="card h-100 text-dark">
          <div className="card-body h-150 d-flex align-items-center">
            <img className="img-fluid" src={car.image} alt="Card image cap" />
          </div>
          <div className="card-body px-3">
            <h2 className="h5 card-title">{car.name}</h2>
            <p className="mb-0">
              <small className="card-text">{car.origin}</small>
            </p>
            <p className="mb-0">
              <small className="card-text">{car.year}</small>
            </p>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default AutoCard;
