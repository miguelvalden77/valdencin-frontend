import { useAppWrapper } from "@/components/appWrapper";
import Layout from "@/components/layout";
import { deleteProduct, getAllProducts, getOneProduct } from "@/services/product.services";
import Link from "next/link";
import { useRouter } from "next/router";


export default function OneProduct({producto}){

    const context = useAppWrapper()
    const router = useRouter()

    const handleBorrar = async (id) =>{
        try{
            await deleteProduct(id)
            router.push("/")
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <Layout>
            <section>
                {
                producto && 
                <article>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.precio}</p>
                    {context.isOwner && 
                    <section>
                        <Link href={`/actualizar/${producto.nombre}`}>Actualizar</Link>
                        <button onClick={()=>handleBorrar(producto._id)}>Borrar</button>
                    </section>}
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
