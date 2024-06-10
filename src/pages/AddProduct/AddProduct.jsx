import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/addProduct/add.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [lastName, setLastName] = useState("");
  const [img, setImg] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Mahsulot nomi kerak!";
    if (!price) newErrors.price = "Narx kerak!";
    if (!img) newErrors.img = "Rasm kerak!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newProduct = { name, price, lastName, img };

      // JSON Serverga yangi mahsulotni qo'shish uchun POST so'rovi
      fetch("http://localhost:3000/craf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Yangi mahsulot qo'shildi:", data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    }
  };

  return (
    <div style={{ marginTop: 100 }} className="add-product-container">
      <div className="addAdmin">
        <h2>Yangi e'lon qo'shish</h2>
        <form onSubmit={handleSubmit}>
          <div className="addName">
            <label>Mahsulot nomi:</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="addName">
            <label>Narxi:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>
          <div className="file-input-container">
            <label htmlFor="">Rasm:</label>
            <label htmlFor="file-upload" className="custom-file-upload">
              <p>Faylni tanlash</p>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {errors.img && <p className="error">{errors.img}</p>}
            {img && <img src={img} alt="Selected" className="preview-image" />}
          </div>
          <button type="submit">
            <p>Qo'shish</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
