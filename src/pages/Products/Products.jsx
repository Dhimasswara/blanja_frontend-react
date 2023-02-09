import React from 'react'
import './Products.css'
import ProductPopuler from '../../components/ProductPopuler/ProductPopuler'
import NewProduct from '../../components/NewProduct/NewProduct'

class Product extends React.Component {
    render() {
        return (
            <section class="products container text-start">
                <ProductPopuler/>
                <NewProduct/>
            </section>
        )
    }
}

export default Product