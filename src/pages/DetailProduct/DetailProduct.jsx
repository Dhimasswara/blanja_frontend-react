import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ImageGrid from './ImageGrid/ImageGrid'
import Color from './PickDetails/Color'
import Quantity from './PickDetails/Quantity'
import './detail-product.css'
import Button from './PickDetails/Button'
import ProductPopuler from '../../components/ProductPopuler/ProductPopuler'
import InformationProduct from './InformationProduct/InformationProduct'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FormatRupiah } from '@arismun/format-rupiah'





const DetailProduct = () => {
  const {id} = useParams()
  const [product,setProduct] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/products/${id}`)
      .then( (response)=> {
        setProduct(response.data.data[0]);
        console.log();
        
      })
      .catch( (error)=> {
        console.log(error);
      });
  }, []);


  return (
    <div>
       <Navbar/>
       <section className="detail-product container mt-5">
            <div className="adds">
                <div className="row">
                    <div className="image-grid col-xxl-5 col-xl-5 col-md-6 col-lg-5 col-sm-12 col-12">
                       <ImageGrid
                          gamb={product.photo}
                       /> 
                    </div>
                    <div
                        className="details col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 py-xxl-0 py-lg-0 py-md-0 py-5">
                        <h4>{product.name}</h4>
                        <p>Nike</p>
                        <div className="rating">
                            
                        </div>
                        <p className="price">Price</p>
                        <h4 className="money"><FormatRupiah value={product.price}/></h4>

                        <div className="row color">
                          <Color/>
                        </div>

                        <div className="quantity row mt-4">
                          <Quantity/>
                        </div>
                        <div className="row buttonBuy my-xxl-5 my-lg-5 my-md-5 my-5 ">
                          <Button/>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="information">
                <InformationProduct/>
            </div>

            <div className='ProductPopular'>
                <ProductPopuler/>
            </div>


        </section>  
    </div>
  )
}

export default DetailProduct