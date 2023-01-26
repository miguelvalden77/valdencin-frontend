import Layout from "@/components/layout";
import { getAllProducts, getOneProduct } from "@/services/product.services";


export default function OneProduct({producto}){

    return(
        <Layout>
            <section>
                {
                producto && 
                <article>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.precio}</p>
                </article> 
                }
            </section>
        </Layout>
    )

}

export async function getStaticPaths(){

    const productos = await getAllProducts()
    const rutas = await productos.map((item)=>{
        return {
            params: {
                nombre: item.nombre
            }
        }
    })

    return {
        paths: rutas,
        fallback: false
    }

}

export async function getStaticProps({params}){

    const nombre = params.nombre
    const producto = await getOneProduct(nombre)
    
    return {
        props: {
            producto
        }
    }

}   
