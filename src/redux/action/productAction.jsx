import axios from "axios";
import swal from "sweetalert2";
import { useParams } from "react-router-dom";

// Read ( GET )
export const getProduct = (setProducts) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/products/`).then(function (response) {
        setProducts(response.data.data);
    });
    dispatch({ type: "GET_ALL_PRODUCT", payload: "success" });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
  }

};

// Create
export const createProduct =
  (data, saveImage) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("stock", data.stock);
        formData.append("price", data.price);
        formData.append("photo", saveImage);
        formData.append("description", data.description);
        formData.append("id_category", "1");

      axios
        .post(process.env.REACT_APP_BACKEND + "/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          swal.fire({
            title: "Product Added",
            text: `New product have been added`,
            icon: "success",
          });
          window.location.reload()
        });
      dispatch({ type: "CREATE_PRODUCT", payload: "success" });
    } catch (err) {
      swal.fire({
        text: err.response.data.message,
        icon: "warning",
      });
    }
  };

// Update
export const updateProduct = (data, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("id_products", data.id);
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    formData.append("id_category", "1");


    const res = await axios
      .put(`${process.env.REACT_APP_BACKEND}/products/${data.id}`, formData, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        swal.fire({
          title: "Product Update",
          text: `Update Product Success`,
          icon: "success",
        });
        window.location.reload()
        dispatch({
            type: "UPDATE_PRODUCT",
            payload: res.data,
          });
      }).catch (err => {
        swal.fire({
            text: "error",
            icon: "error",
          });
      })
  } catch (error) {
       console.log(error);
  }
};


// Delete
export const deleteProducts = (id) => async (dispatch) => {
  try {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/products/${id}`)
      .then((res) => {
        console.log(res);
        swal.fire({
          title: "Product Delete",
          text: `Delete Product Success`,
          icon: "success",
        });
        window.location.reload();
        dispatch({ type: "DELETE_PRODUCT", payload: "success" });
      }).catch (err => {
        swal.fire({
            text: "error",
            icon: "error",
          });
      })

  } catch (error) {
    console.log();
  }
};
