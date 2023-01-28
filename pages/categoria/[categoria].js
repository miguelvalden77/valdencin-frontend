import Layout from "@/components/layout";
import { verifyService } from "@/services/auth.services";
import { getProductsCategory } from "@/services/product.services";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";


export default function Categoria({productos}){

    return(
        <Layout>
            <section>
                {productos && productos.map((item)=>{
                    return <article key={item._id}>
                        <Link href={`/productos/${item.nombre}`}><h2>{item.nombre}</h2></Link>
                        <p>{item.precio}</p>
                        {item.imagen && <Image src={item.imagen} width={200} height={150}/>}
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
