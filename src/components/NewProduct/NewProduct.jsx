import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import Rating from "../../components/Rating/Rating";
import { FormatRupiah } from "@arismun/format-rupiah";

const NewProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios
    .get(`http://localhost:4000/products`)
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
        <h1>New</h1>
        <p>Find clothes that are trending recently</p>
      </div>

      <div class="content-products d-grid">
      <div class="row justify-content-lg-start">
      {products.map((item)=> (
      
        
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
            <div class="card">
              <img
                src={require("../../assets/img/new product/jacket.png")}
                alt=""
              />
              <div class="card-body">
                <p>{item.name}</p>
                <p class="price"><FormatRupiah value={item.price}/></p>
                <p class="detail">Zalora Cloth</p>
                <Rating/>
              </div>
            </div>
          </div>
          
          
        
      ))}
        </div>
      </div>
    </>
  );
};

export default NewProduct;
