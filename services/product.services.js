import axios from "axios"

const getAllProducts = async ()=>{
    const products = await fetch("http://localhost:5005/api/products/all")
    return await products.json()
}

const getProductsCategory = async (categoria)=>{
    const products = await fetch(`http://localhost:5005/api/products/${categoria}/categoria`)
    return await products.json()
}

const getOneProduct = async (producto)=>{
    const product = await fetch(`http://localhost:5005/api/products/${producto}/producto`)
    return await product.json()
}

const createProduct = async (producto)=>{
    return axios.post("http://localhost:5005/api/products/create", producto)
}

const updateProduct = async (productId, info) =>{
    return axios.patch(`http://localhost:5005/api/products/${productId}/update`, info)
}

export {getAllProducts, getProductsCategory, getOneProduct, createProduct, updateProduct}