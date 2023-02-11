import React from 'react'

const InformationProduct = () => {
  return (
    <>
             <div className="row py-xxl-5 py-lg-5 py-md-5 py-5">
                    <div className="col-12">
                            <h2 style={{fontWeight: "bold" , paddingBottom: "30px"}}>Informasi Produk</h2>
                    </div>
                    <div className="col-12">
                        <p style={{fontWeight: "bold"}}>Condition</p>
                        <p style={{color: "red" , marginTop: "-15px" , paddingBottom: "30px"}}>New</p>
                    </div>
                    <div className="col-12">
                        <div className="description">
                            <h4 style={{fontWeight: "bold"}}>Description</h4>
                            <p style={{ color: "grey" , textAlign: "justify"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>

                                Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet
                                dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in
                                faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt
                                tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
                                Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at,
                                ornare suscipit magna.<br/><br/>

                                Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet
                                dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in
                                faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.<br/><br/>

                                In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <h2 style={{fontWeight: "bold" , paddingTop: "50px"}}>Product Review</h2>
                        </div>
                        <div className="row">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-6">
                                <p style={{fontSize: "50px" , fontWeight: "600" , paddingTop: "20px"}}>5.0<span style={{fontSize: "20px" , color: "gray"}}> /10</span></p>

                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default InformationProduct