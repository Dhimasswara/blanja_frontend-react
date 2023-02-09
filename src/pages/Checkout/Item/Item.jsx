import React from 'react'

const Item = () => {
  return (

    <>
                        <div className="row pic-one mb-3">
                            <div className="col-12 pic-one-col d-flex align-items-center ms-2">
                                <div
                                    className="col-8 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-center">
                                    <div style={{padding: "12px"}}><img style={{borderRadius: "10px"}}
                                            src={require("../../../assets/img/mybag/satu.png")} alt=""/></div>
                                    <div className="name">Men's formal suit - Black<br/>
                                        <span style={{fontSize: "13px" , color: "gray"}}>Zalora Cloth</span>
                                    </div>
                                </div>
                                <div className="col-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1  ms-auto text-end">
                                    <h5 style={{color: "red" , fontWeight: "700" , paddingRight: "10px"}}>$ 20.0</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row pic-two ">
                             <div className="col-12 pic-one-col d-flex align-items-center ms-2">
                                 <div
                                    className="col-8 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-center">
                                    <div style={{padding: "12px"}}><img style={{borderRadius: "10px"}}
                                            src={require("../../../assets/img/mybag/satu.png")}  alt=""/></div>
                                    <div className="name">Men's formal suit - Black<br/>
                                        <span style={{fontSize: "13px" , color: "gray"}}>Zalora Cloth</span>
                                    </div>
                                </div>
                                <div className="col-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1  ms-auto text-end">
                                    <h5 style={{color: "red" , fontWeight: "700" , paddingRight: "10px"}}>$ 20.0</h5>
                                </div>
                            </div>
                        </div>

     </>
  )
}

export default Item