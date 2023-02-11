import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert';

const ModalProduct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [saveImage, setSaveImage]  = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  const [data, setData] = useState({
    name:"",
    stock:"",
    price:"",
    description:""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    formData.append("id_category", "1");
    
    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }
    axios
    .post(process.env.REACT_APP_BACKEND + "/products", formData ,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
        Swal("Created!", "Product Created Success!", "success");
        setShow(false)
      })
      .catch((err) => {
        Swal("Failed!", "Product Create Failed!", "error");
        setShow(false)
      });
  };

  return (
    <Fragment>
      <Button variant="success" onClick={handleShow} className="mb-3">
        Create Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" id="button-addon2">
            Create
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  )
}

export default ModalProduct