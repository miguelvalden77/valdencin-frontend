import Layout from "@/components/layout";
import { getProductsCategory } from "@/services/product.services";
import Link from "next/link";


export default function Categoria({productos}){

    return(
        <Layout>
            <section>
                {productos && productos.map((item)=>{
                    return <article>
                        <Link href={`/productos/${item.nombre}`}><h2>{item.nombre}</h2></Link>
                        <p>{item.precio}</p>
                    </article>
                })}
            </section>
        </Layout>
    )

}


export async function getStaticPaths(){

    const categorias = ["Jamones", "Paletas", "Quesos", "Embutidos"]

    const rutas = categorias.map((categoria)=>{

        return {
            params: {
                categoria: categoria
            }
        }

    })

    return {
        paths: rutas,
        fallback: false
    }

}

export async function getStaticProps({params}){

    const categoria = params.categoria
    const productos = await getProductsCategory(categoria)

    return {
        props: {
            productos
        }
    }

}
