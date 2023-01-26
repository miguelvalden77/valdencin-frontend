import Layout from "@/components/layout";
import Link from "next/link";
import jamon from "../../public/images/jamones.jpg"
import paleta from "../../public/images/paletas.jpg"
import embutido from "../../public/images/embutidos.png"
import queso from "../../public/images/quesos.png"
import Image from "next/image";


export default function Productos({productos}){

    return(
        <Layout>
            <section>
                {productos.length > 0 && productos.map((item)=>{
                    return <article key={item.nombre} style={{width: "300px", position: "relative", height: "180px"}}>
                        <Link href={`/categoria/${item.nombre}`}>
                            <h2>{item.nombre}</h2>
                            <Image src={item.imagen} placeholder={"blur"} fill alt={item.nombre}/>
                        </Link>
                    </article>
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
