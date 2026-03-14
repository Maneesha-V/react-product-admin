import axios from "axios";

const API = "https://dummyjson.com/products";
export const getProducts = () => axios.get(API);
export const getProduct = (id: number) => axios.get(`${API}/${id}`);
export const updateProduct = (id: number,data: any) => axios.patch(`${API}/${id}`, data);
export const addProduct = (data: any) => axios.post(`${API}/add`, data);
export const deleteProduct = (id: number) => axios.delete(`${API}/${id}`)