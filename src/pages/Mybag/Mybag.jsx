import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Filter from '../../components/Filter/Filter'
import Cart from '../../components/Cart/Cart'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'

const Mybag = () => {
        
        // <div>
        // <Navbar/>
        // <Filter/>
        // <Cart/>
        // </div>

        const isLogin = localStorage.getItem('token');

        if (!isLogin) {
        return (
            <>
                <Navbar/>
                <Filter/>
                <Cart/>
            </>
        );
        } else {
        return (
            <>
                <NavbarLogin/>
                <Filter/>
                <Cart/>
            
            </>
        );
        }

}

export default Mybag