import { Link } from "react-router-dom";

const ProductTable = ({products, onDelete}: any) => {
    const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure?");

    if(confirmDelete){
      onDelete(id);
      alert("Product Deleted");
    }
    products = products.filter((prod: any)=>prod.id !== id)
    }
    return(
        <div>
            <table className="table table-bodered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod: any)=>(
                        <tr key={prod.id}>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>{prod.category}</td>
                            <td>{prod.stock}</td>
                            <td>
                                <Link className="btn btn-primary btn-sm me-2" to={`/edit-product/${prod.id}`}>Edit</Link>
                                <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(prod.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProductTable;