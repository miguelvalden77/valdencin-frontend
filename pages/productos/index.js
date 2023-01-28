import Layout from "@/components/layout";
import Link from "next/link";
import jamon from "../../public/images/jamones.jpg"
import paleta from "../../public/images/paletas.jpg"
import embutido from "../../public/images/embutidos.png"
import queso from "../../public/images/quesos.png"
import Image from "next/image";
import styles from "../../styles/AllCategories.module.css"

export default function Productos({productos}){

    return(
        <Layout>
            <section className={styles.all_categories}>
                {productos.length > 0 && productos.map((item)=>{
                return <Link key={item.nombre} href={`/categoria/${item.nombre}`}>
                            <article className={styles.category_card} style={{position: "relative"}}>
                                <Image className={styles.category_img} src={item.imagen} placeholder={"blur"} fill alt={item.nombre}/>
                                <h2 className={styles.category_title}>{item.nombre}</h2>
                            </article>
                        </Link>
                })}
            </section>
        </Layout>
    )

}

export async function getStaticProps(){

    const productos = [
        {
            nombre: "Jamones",
            imagen: jamon
        },
        {
            nombre: "Paletas",
            imagen: paleta
        },
        {
            nombre: "Embutidos",
            imagen: embutido
        },
        {
            nombre: "Quesos",
            imagen: queso
        }
    ]

    return {
        props: {
            productos
        }
    }

}
