import React from "react";

const Button = () => {
  return (
    <>
      
      <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-3 col-6 py-xxl-0 py-xl-0 py-lg-2 py-md-2 py-2 d-grid">
        <button
          style={{borderRadius: "50px" , border: "1px solid black"}}
          className="btn btn-light"
        >
          Chat
        </button>
      </div>
      <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-3 col-6 py-xxl-0 py-xl-0 py-lg-2 py-md-2 py-2 d-grid">
        <button
          style={{borderRadius: "50px" , border: "1px solid black" }}
          className="btn btn-light"
        >
          Add Bag
        </button>
      </div>
      <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-12 d-grid">
        <button style={{borderRadius: "50px" }} className="btn btn-danger ">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Button;
