import React from 'react'
import style from './Navbarlogin.module.css'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <>
    <header>
        <nav className={` ${style.navbar} navbar navbar-expand-lg bg-light fixed-top fixed-sm-bottom`}>
            <div className="navContent container">
                <a className={`navbar-brand ${style.brand}`} href={"/#"}>
                    <img src={require("../../assets/img/Vector.png")} style={{width: "32px"}} alt=""/>
                    <span> Blanja </span>
                </a>
                <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className={`form-search ${style.formSearch} ms-lg-5`} role="search">
                        <input className={`form-control ${style.formControl} mx-auto`} type="search" placeholder="Search" aria-label="Search"/>
                        <button className={`search-btn ${style.searchBtn}`} type="submit"><i
                                className="fa-sharp fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <ul className={`navbar-nav ${style.navigation} mb-2 mb-lg-0 mx-auto`}>
                        <button className={`${style.filterBtn} me-lg-auto ms-lg-3 my-auto`} data-bs-toggle="modal" data-bs-target="#filter-product"><i className="fa fa-filter" aria-hidden="true"></i></button>
                        <Link to='/Mybag' style={{marginTop: "14px"}}>
                        <button className={`${style.cartBtn} me-lg-3`}><i className="fa-solid fa-cart-shopping"></i></button>
                        </Link>
                        <button className={`${style.notifBtn} btn me-lg-3`}><i className="fa-solid fa-bell"></i></button>
                        <button className={`${style.messageBtn} btn me-lg-3`}><i className="fa-solid fa-envelope"></i></button>
                        <li className={`nav-item ${style.navItem} dropdown-center`}>
                            <a className="nav-link dropdown-toggle" href={"/#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={require("../../assets/img/profile/profile.png")} alt=""/>
                            </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href={"/#"}>Profil</a></li>
                              <Link to='/Login'>
                              <li><a className="dropdown-item" href={"/#"}>Logout</a></li>
                              </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default NavbarLogin