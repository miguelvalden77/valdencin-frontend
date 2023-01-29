import Layout from "@/components/layout";
import { verifyService } from "@/services/auth.services";
import { getProductsCategory } from "@/services/product.services";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../../styles/Category.module.css"


export default function Categoria({productos}){

    return(
        <Layout>
            <section className={styles.category_section}>
                {productos && productos.map((item)=>{
                    return <article className={styles.product_card} key={item._id}>
                        <div className={styles.product_img_container}>
                            <Image src={item.imagen} fill/>
                        </div>
                        <div className={styles.info_container}>  
                            <Link href={`/productos/${item.nombre}`}><h2>{item.nombre}</h2></Link>
                            <p>{item.precio} €</p>
                        </div>
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
