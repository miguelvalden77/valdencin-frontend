
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

export {getAllProducts, getProductsCategory, getOneProduct}