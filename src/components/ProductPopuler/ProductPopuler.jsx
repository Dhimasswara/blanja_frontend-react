import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { FormatRupiah } from "@arismun/format-rupiah";
import Rating from "../../components/Rating/Rating";
import { Link } from "react-router-dom";

const ProductPopuler = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND}/products`)
    .then(function (response) {
    setProducts(response.data.data);
    })
    .catch(function (error) {
    console.log(error);
    });
    }, []);


  return (
    <>
      <div class="header-products">
        <h1>Populer</h1>
        <p>You’ve never seen it before!</p>
      </div>

      <div class="content-products d-grid">
      <div class="row justify-content-lg-start">
      {products.map((item, index)=> (
      
        
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
            <Link to={`/Detail/${item.id_products}`} key={index.toString()} style={{color: "black"}}>
            <div class="card">
              <img
                class="img-fluid"
                crossOrigin="Anonymous"
                src={item.photo}
                alt=""
              />
              <div class="card-body">
                <p>{item.name}</p>
                <p class="price"><FormatRupiah value={item.price}/></p>
                <p class="detail">Zalora Cloth</p>
                <Rating/>
              </div>
            </div>
            </Link>
          </div>

      ))}
        </div>
      </div>
    </>
  );
};

export default ProductPopuler;
