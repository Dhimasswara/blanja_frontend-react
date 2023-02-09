import React from 'react'
import style from './Carousel.module.css'

class Carousel extends React.Component {
    render() {
        return (
            <div className={`${style.populer} container rounded`}>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className={`${style.carouselInner} carousel-inner`}>
                        <div className="carousel-item ">
                            <img src={require('../../assets/img/product/satu.jpg')} className="d-block w-100" alt="gambar satu"/>
                        </div>
                        <div className="carousel-item active">
                            <img src={require('../../assets/img/product/dua.jpg')} className="d-block w-100" alt="gambar satu"/>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../assets/img/product/tiga.jpg')} className="d-block w-100" alt="gambar satu"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Carousel