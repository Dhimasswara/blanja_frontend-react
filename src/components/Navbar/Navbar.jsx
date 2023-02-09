import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Filter from '../Filter/Filter'


const Navbar = () => {
        return (
          <>
          <header>
          <Filter/>
          <nav className={`${style.navbar} navbar navbar-expand-lg bg-light fixed-top`}>
            <div className="nav-content container">
              <a className={` ${style.brand} navbar-brand`} href={"/home"}>
                <img src={require('../../assets/img/Vector.png')} alt=""/>
                  <span> Blanja </span>
              </a>
              <button className={`${style.toggler} navbar-toggler`} type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className={`${style.search} form-search ms-lg-5`} role="search">
                  <input className={`${style.controls} form-control mx-auto`} type="search" placeholder="Search" aria-label="Search"/>
                    <button className={`${style.searchBtn}`} type="submit"><i
                      className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <ul className={`${style.navigation} navbar-nav mb-2 mb-lg-0 mx-auto`}>
                  <button className={`${style.filterBtn} me-lg-auto ms-lg-3`} data-bs-toggle="modal" data-bs-target="#filter-product"><i className="fa fa-filter" aria-hidden="true"></i></button>
                  <Link to='/Mybag'>
                  <button className={`${style.cartBtns} me-lg-3`}><i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  </Link>
                  <Link to='/Login'>
                  <button className={`${style.loginBtn} btn btn-danger me-lg-2`}>Login
                  </button>
                  </Link>
                  <Link to='/Register'>
                  <button className={`${style.signBtn} btn btn-light`}>Sign Up</button>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        </>
        )
}

export default Navbar