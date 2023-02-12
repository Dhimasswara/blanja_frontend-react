import React from "react";
import { useEffect , useState } from "react";
import Rating from "../../components/Rating/Rating";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/action/productAction";

const NewProduct = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect((setProducts) => {
    dispatch(getProduct(setProducts));
    }, []);

  return (
    <>
      <div class="header-products">
        <h1>New</h1>
        <p>Find clothes that are trending recently</p>
      </div>

      <div class="content-products d-grid">
      <div class="row justify-content-lg-start">
      {products.map((item, index)=> (
      
      
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
            <Link to={`/Detail/${item.id_products}`} key={index.toString()} style={{color: "black"}} >
            <div class="card">
              <img
                class="img-fluid max-h-25"
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

export default NewProduct;
