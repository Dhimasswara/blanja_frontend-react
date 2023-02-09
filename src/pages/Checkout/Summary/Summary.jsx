import React from "react";
import './Summary.css'

const Summary = () => {
  return (
    <>
      <main className="shopping-summary mb-lg-0 mb-5 mt-3 mt-lg-0 justify-content-center">
        <p className="title-summary">Shopping summary</p>
        <section className="sum-price">
          <section className="price order">
            <p id="title-price">Order</p>
            <p id="price">$ 40.0</p>
          </section>
          <section className="price delivery">
            <p id="title-price">Delivery</p>
            <p id="price">$ 5.0</p>
          </section>
        </section>
        <hr className="line-sum" />
        <section className="price total">
          <p className="title-summary">Shopping summary</p>
          <p id="result-price">$ 45.0</p>
        </section>
        <button
          type="button"
          className="btn__payment"
          data-bs-toggle="modal"
          data-bs-target="#select-payment"
        >
          Select payment
        </button>
      </main>
    </>
  );
};

export default Summary;
