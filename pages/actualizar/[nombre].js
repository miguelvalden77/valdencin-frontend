import { getOneProduct } from "@/services/product.services"


export default function ActualizarProducto({producto}){

    return(
        <h1>{producto.nombre}</h1>
    )

}


export async function getServerSideProps({params}){

    const nombre = params.nombre
    const producto = await getOneProduct(nombre)

    return {
        props: {
            producto
        }
    }

}
