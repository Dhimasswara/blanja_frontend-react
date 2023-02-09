import React from 'react'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import Address from './Address/Address'
import './Check.css'
import Item from './Item/Item'
import Summary from './Summary/Summary'

const Checkout = () => {
  return (
    <>
        <NavbarLogin/>
        <section className="mybag container">
            <div className="mybag-header">
                <div className="row">
                    <div className="col-12">
                        <h1>Checkout</h1>
                    </div>
                </div>
                <div className="row shipping">
                    <div className="col-12 mt-4">
                        <h5>Shipping Address</h5>
                    </div>
                </div>
            </div>
            <div className="mybag-content">
                <div className="row justify-content-between">
                    <div className="col-lg-8 col-sm-12">
                        <Address/>
                        <Item/>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <Summary/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Checkout