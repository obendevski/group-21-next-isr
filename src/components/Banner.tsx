import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row py-10 align-items-center">
          <div className="col-7">
            <div className="bg-dark text-white p-5 rounded">
              <h2 className="display-4">
                Find your dream car <br /> with Auto Trader!
              </h2>
              <p className="lead">
                It is a long established fact that a reader will distracted by the readable content
                of a page when looking.
              </p>
              <a className="btn btn-success" role="button">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
