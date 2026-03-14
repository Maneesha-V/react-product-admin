import { useEffect, useState } from "react";
import ProductTable from "../components/product/ProductTable";
import { deleteProduct, getProducts } from "../services/productServices";

function Products (){
    const [products, setProducts] = useState<any>([]);
    const [search, setSearch] = useState<string>("")
    useEffect(()=>{
        fetchProducts();
    },[])
    const fetchProducts = async () => {
        const res = await getProducts();
        console.log("res",res)
        setProducts(res.data.products)
    }
    const handleDelete = async (id: number) => {
        await deleteProduct(id);
        setProducts(products.filter((prod: any) => prod.id !== id));
    };
    const filteredProducts = products.filter((prod: any)=>prod.title.toLowerCase().includes(search.toLowerCase()))
    
    return(
        <div>
            <h1>Products</h1>
            <input type="text" placeholder="Search products..." onChange={(e)=>setSearch(e.target.value)} />
            <ProductTable products={filteredProducts} onDelete={handleDelete} />
        </div>
    )
}
export default Products;