import React from "react";
import './address.css'

const Address = () => {
  return (
    <div className="select row mb-3">
      <div className="select-col col-12 d-flex align-items-center ms-2">
        <section className="adress">
          <p className="name-buyer">Andreas Jane</p>
          <p className="the-adress">
            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
            Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
            Kab. Banyumas, 53181
          </p>
          <button
            data-bs-toggle="modal"
            data-bs-target="#change-another-adress"
            className="another-adress"
          >
            Choose another address
          </button>
        </section>
      </div>
    </div>
  );
};

export default Address;
