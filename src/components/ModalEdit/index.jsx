import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert';

const ModalEdit = ({id, name, stock, price, description}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    id,
    name,
    stock,
    price,
    description
  });

  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    formData.append("id_category", "1");

    console.log(id)
    axios
      .put(`${process.env.REACT_APP_BACKEND}/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        Swal("Updated!", "Product Update Succes!", "success");
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        Swal("Failed!", "Product Update Failed!", "error");
        setShow(false);
      });
  };


  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow} className="mt-1">
        Edit
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

export default ModalEdit