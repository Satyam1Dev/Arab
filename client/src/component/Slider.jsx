import React from "react";

const Slider = () => {
  return (
    <div className="container">
    <div className="row align-items-center">
      <div className="col-md-1" style={{ backgroundColor: "#46b9e5",height: "400px" }}></div>
      <div className="col-md-10">
        <div className=" slider">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://slidesbase.com/wp-content/uploads/2015/11/blue.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://slidesbase.com/wp-content/uploads/2015/11/blue.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://slidesbase.com/wp-content/uploads/2015/11/blue.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-md-1" style={{ backgroundColor: "#46b9e5" ,height: "400px" }}></div>
    </div>
    </div>
  );
};

export default Slider;
