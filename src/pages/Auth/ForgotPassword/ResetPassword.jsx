import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="form-login">
        <div className="row justify-content-center">
          <div className="col-8 text-center mb-4">
            <div className="logo-brand">
              <img src={require("../../../assets/img/Vector.png")} alt="logo-brand"/>
                <p>Blanja</p>
            </div>
            <div className="content">
              <h4>Reset Password</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-md-6 col-sm-8 col-10 col-xl-4">
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
              </div>

              <div className="d-grid">
                <button onclick="window.location.href='/pages/forgotPassword/confirmLogin.html';" className="btn btn-danger login-button">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center text-center mt-4">
          <div className="Register col-12">
            <p>Don't have a Blanja account? <Link to='/Register'>Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword