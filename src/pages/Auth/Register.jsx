import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-10 col-xxl-12 col-lg-12 col-md-12 col-sm-12 text-center mb-2">
                    <div className="logo-brand">
                        <img src={require("../../assets/img/Vector.png")} alt="logo-brand"/>
                        <p>Blanja</p>
                    </div>
                    <div className="content">
                        <h4>Please signup with your account</h4>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-lg-4 col-md-6 col-sm-8 col-xxl-4 col-xl-4 col-12">
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="button signup-customer active" id="pills-Customer-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer"
                                aria-selected="true">Customer</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="button signup-seller" id="pills-Seller-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller"
                                aria-selected="false">Seller</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-Customer" role="tabpanel"
                            aria-labelledby="pills-Customer-tab" tabindex="0">
                            <form className="pt-4">
                                <div className="mb-3">
                                    <input type="text" className="form-control py-2 px-3" id="name" name="name" placeholder="Name" />
                                </div>

                                <div className="mb-3">
                                    <input type="email" className="form-control py-2 px-3" id="email" name="email" placeholder="Email" />
                                </div>

                                <div className="mb-3">
                                    <input type="password" className="form-control py-2 px-3" id="password" name="password"
                                        placeholder="Password" />
                                </div>

                                <button type="submit" className="button create-account mt-4">Create Account</button>
                            </form>
                        </div>


                        <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                            <form className="pt-4">
                                <div className="mb-3">
                                    <input type="text" className="form-control py-2 px-3" id="name" name="name" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control py-2 px-3" id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control py-2 px-3" id="phone" name="phone"
                                        placeholder="Phone number" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control py-2 px-3" id="store-name" name="store-name" placeholder="Store Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control py-2 px-3" id="password" name="password"
                                        placeholder="Password" />
                                </div>
                                <button type="submit" className="button create-account mt-4">Create Account</button>
                            </form>
                        </div>

                    </div>
                    <div>
                        <p className="mt-5 Register">Already have a Blanja account? <Link to='/Login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register