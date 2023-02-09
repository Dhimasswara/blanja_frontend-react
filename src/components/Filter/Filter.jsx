import React from 'react'
import './Filter.css'

class Filter extends React.Component {
    render() {
        return (
            <div className="modal fade text-start" id="filter-product" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" data-bs-dismiss="modal"><img src={require("../../assets/img/home/filter/close-icon.png")}
                                    alt=""/></button>
                            <h5 className="modal-title" id="staticBackdropLabel">Filter</h5>
                        </div>
                        <div className="modal-body">
                            <div className="filter-colors">
                                <p className="filter-title">Colors</p>
                                <div className="category flex-wrap">
                                    <input type="checkbox" className="btn-check" id="color1" autocomplete="off"/>
                                    <label for="color1" className="btn-black choice-color"></label>
                                    <input type="checkbox" className="btn-check" id="color2" autocomplete="off"/>
                                    <label for="color2" className="btn-white choice-color"></label>
                                    <input type="checkbox" className="btn-check" id="color3" autocomplete="off"/>
                                    <label for="color3" className="btn-red choice-color"></label>
                                    <input type="checkbox" className="btn-check" id="color4" autocomplete="off"/>
                                    <label for="color4" className="btn-grey choice-color"></label>
                                    <input type="checkbox" className="btn-check" id="color5" autocomplete="off"/>
                                    <label for="color5" className="btn-brown choice-color"></label>
                                    <input type="checkbox" className="btn-check" id="color6" autocomplete="off"/>
                                    <label for="color6" className="btn-blue choice-color"></label>
                                </div>
                            </div>
                            <hr className="divider-filter"/>
                            <div className="filter-size">
                                <p className="filter-title">Size</p>
                                <div className="category flex-wrap">
                                    <input type="checkbox" className="btn-check" id="size-xs" autocomplete="off"/>
                                    <label for="size-xs" className="choice-size">XS</label>
                                    <input type="checkbox" className="btn-check" id="size-s" autocomplete="off"/>
                                    <label for="size-s" className="choice-size">S</label>
                                    <input type="checkbox" className="btn-check" id="size-m" autocomplete="off"/>
                                    <label for="size-m" className="choice-size">M</label>
                                    <input type="checkbox" className="btn-check" id="size-l" autocomplete="off"/>
                                    <label for="size-l" className="choice-size">L</label>
                                    <input type="checkbox" className="btn-check" id="size-xl" autocomplete="off"/>
                                    <label for="size-xl" className="choice-size">XL</label>
                                </div>
                            </div>
                            <hr className="divider-filter"/>
                            <div className="filter-gender">
                                <p className="filter-title">Category</p>
                                <div className="category flex-wrap">
                                    <input type="checkbox" className="btn-check" id="all" autocomplete="off"/>
                                    <label for="all" className="choice-category">All</label>
                                    <input type="checkbox" className="btn-check" id="women" autocomplete="off"/>
                                    <label for="women" className="choice-category">Women</label>
                                    <input type="checkbox" className="btn-check" id="man" autocomplete="off"/>
                                    <label for="man" className="choice-category">Man</label>
                                    <input type="checkbox" className="btn-check" id="boys" autocomplete="off"/>
                                    <label for="boys" className="choice-category">Boys</label>
                                    <input type="checkbox" className="btn-check" id="girls" autocomplete="off"/>
                                    <label for="girls" className="choice-category">Girls</label>
                                </div>
                            </div>
                            <hr className="divider-filter"/>
                            <div className="filter-brand">
                                <div className="select-brand">
                                    <p className="filter-title">Brand</p>
                                    <select name="brand" id="brand" className="form-select">
                                        <option value="adidas">adidas Originals, Jack & Jones, s.Oliver</option>
                                        <option value="adidas">adidas Originals, Jack & Jones, s.Oliver</option>
                                    </select>
                                </div>
                            </div>
                            <hr className="divider-filter"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                            <button type="button" className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter