import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/productServices";

function EditProduct () {
    const {id} = useParams();
    console.log("id",id)
    const [product,setProduct] = useState<any>({});
    useEffect(()=>{
        loadProduct()
    }, [])
    const loadProduct = async () => {
        if(!id) return;
        const res = await getProduct(Number(id));
        console.log("res",res);
        setProduct(res.data)

    }
    const handleChange = (e: any) => {
        setProduct({
           ... product,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await updateProduct(Number(id), product);
        console.log("res",res.data);
        
        alert("Updated..")
    }
    return (
<div className="container mt-4">
  <form onSubmit={handleSubmit}>
    <h1>Edit Product</h1>

    <input className="form-control mb-2" name="title" value={product.title || ""} onChange={handleChange} />

    <input className="form-control mb-2" name="price" value={product.price || ""} onChange={handleChange} />

    <input className="form-control mb-2" name="category" value={product.category || ""} onChange={handleChange} />

    <input className="form-control mb-2" name="stock" value={product.stock || ""} onChange={handleChange} />

    <button className="btn btn-success" type="submit">Update</button>
  </form>
</div>
    );
}
export default EditProduct;