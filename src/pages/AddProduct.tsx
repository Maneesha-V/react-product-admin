import { useState } from "react";
import { addProduct } from "../services/productServices";

function AddProduct() {

  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  });

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addProduct(product);

    alert("Product Added");
  };

  return (
    <div className="container mt-4">
    <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
      <input className="form-control mb-2" name="title" placeholder="Title" onChange={handleChange} /><br />
      <input className="form-control mb-2" name="price" placeholder="Price" onChange={handleChange} /><br />
      <input className="form-control mb-2" name="category" placeholder="Category" onChange={handleChange} /><br />
      <input className="form-control mb-2" name="description" placeholder="Description" onChange={handleChange} /><br />
      <input className="form-control mb-2" name="stock" placeholder="Stock" onChange={handleChange} /><br />

      <button className="btn btn-success" type="submit">Add Product</button>

    </form>
    </div>
  );
}

export default AddProduct;