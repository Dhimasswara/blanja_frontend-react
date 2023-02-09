import React from 'react'
import style from './cart.module.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <section className="mybag container">
            <div className={`${style.mybagHeader}`}>
                <div className="row">
                    <div className="col-12">
                        <h1>My Bag</h1>
                    </div>
                </div>
            </div>
            <div className={`${style.mybagContent}`}>
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <div className={`${style.select} row mb-3`}> 
                            <div className={`${style.selectCol} col-12 d-flex align-items-center ms-2`}>
                                <div className="col-xxl-8 col-xl-8 col-md-8 col-lg-8 col-sm-10 col-10">
                                    <div className="form-check d-flex align-items-center ">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" for="defaultCheck1">
                                            <div style={{padding: "12px"}}>Select all items (2 items selected)</div>   
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-md-4 col-lg-4 col-sm-2 col-2 text-end">
                                    <button  style={{color: "red", background: "none", border: "none"}} >Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${style.picOne} mb-3`}>
                            <div className={`col-12 ${style.picOneCol} d-flex align-items-center ms-2`}>
                                <div className="col-8 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 ">
                                    <div className="form-check d-flex align-items-center ">
                                        <input style={{width: "16px"}} className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label ms-2" for="defaultCheck1">
                                            <div style={{padding: "12px"}}><img style={{borderRadius: "10px"}} src="/asset/img/mybag/satu.png" alt=""/></div> 
                                        </label>
                                            <div className="name">Men's formal suit - Black<br/>
                                            <span style={{fontSize: "13px", color: "gray"}}>Zalora Cloth</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3  ms-auto text-end d-flex justify-content-around align-items-center">
                                    <button style={{width:"35px", height: "35px" , backgroundColor: "antiquewhite" , borderRadius: "100%" , border: "none"}}>-</button>
                                    <p style={{paddingTop: "15px"}}>2</p>
                                    <button style={{width: "35px", height: "35px", backgroundColor: "antiquewhite" , borderRadius: "100%", border: "none"}}>+</button>
                                </div>
                                <div className="col-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1  ms-auto text-end">
                                    <h5 style={{color: "red" , fontWeight:"700", paddingRight: "10px"}} >$ 20.0</h5>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${style.picTwo} `}>
                            <div className={`col-12 ${style.picOneCol} d-flex align-items-center ms-2`}>
                                <div className="col-8 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 ">
                                    <div className="form-check d-flex align-items-center ">
                                        <input style={{width: "16px"}} className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label ms-2" for="defaultCheck1">
                                            <div style={{padding: "12px"}}><img style={{borderRadius: "10px"}} src="/asset/img/mybag/satu.png" alt=""/></div> 
                                        </label>
                                            <div className="name">Men's formal suit - Black<br/>
                                            <span style={{fontSize: "13px" , color: "gray"}}>Zalora Cloth</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3  ms-auto text-end d-flex justify-content-around align-items-center">
                                    <button style={{width:"35px" , height: "35px" , backgroundColor:"antiquewhite", borderRadius: "100%" , border: "none"}}>-</button>
                                    <p style={{paddingTop: "15px"}}>2</p>
                                    <button style={{width:"35px" , height: "35px" , backgroundColor: "antiquewhite" , borderRadius: "100%" , border: "none"}}>+</button>
                                </div>
                                <div className="col-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1  ms-auto text-end">
                                    <h5 style={{color: "red" , fontWeight: "700" , paddingRight: "10px"}} >$ 20.0</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-12 col-12">
                        <div className={`${style.summary} row mb-3`}> 
                            <div className={`${style.summaryCol} col-12 col-xxl-12 col-xl-12 col-lg-12 ms-2`}>
                                <div className={`${style.sum}`}>
                                    <h5>Shopping summary</h5>
                                    <div className={`${style.price}`}>
                                    <p>Total Price</p>
                                    <p className={`${style.money}`}>$40.5</p>
                                    </div>
                                    <div className={`${style.btnBuy} d-grid mx-2`}>
                                    <Link clasName="btn" to='/Checkout'>
                                    <p style={{borderRadius:"50px"}} className="btn btn-danger d-grid"> Buy</p>  
                                    </Link>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Cart 