import React from "react";

const Color = () => {
  return (
    <>
      <p>color</p>
      <div style={{ display: "flex"}} class="pick-color">
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option1"
          autocomplete="off"
        />
        <label
          style={{width: "30px" , height: "30px" , borderRadius: "100%" , marginRight: "10px" , border: "none"}}
          class="btn btn-danger"
          for="option1"
        ></label>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option2"
          autocomplete="off"
        />
        <label
          style={{width: "30px" , height: "30px" , borderRadius: "100%" , marginRight: "10px" , border: "none"}}
          class="btn btn-warning"
          for="option2"
        ></label>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option3"
          autocomplete="off"
        />
        <label
          style={{ width: "30px" , height: "30px" , borderRadius: "100%" , marginRight: "10px" , border: "none" }}
          class="btn btn-primary"
          for="option3"
        ></label>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option4"
          autocomplete="off"
        />
        <label
          style={{ width: "30px" , height: "30px" , borderRadius: "100%" , marginRight: "10px" , border: "none" }}
          class="btn btn-success"
          for="option4"
        ></label>
      </div>
    </>
  );
};

export default Color;
