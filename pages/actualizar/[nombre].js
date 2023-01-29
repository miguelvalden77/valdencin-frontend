import { useAppWrapper } from "@/components/appWrapper"
import Layout from "@/components/layout"
import { getOneProduct, updateProduct } from "@/services/product.services"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../../styles/Login.module.css"
import Image from "next/image"


export default function ActualizarProducto({producto}){

    const router = useRouter()
    const context = useAppWrapper()

    const [data, setData] = useState({nombre: producto.nombre, precio: producto.precio, categoria: producto.categoria, descripcion: producto.descripcion})
    const [urlImage, setUrlImage] = useState(producto.imagen)

    useEffect(()=>{
        context.authenticateUser()
        context.verificar()
    }, [])

    const handleChange = (evt)=> setData({...data, [evt.target.name]: evt.target.value})
    const handleSubmit = async (evt)=> {

        evt.preventDefault()

        try{
            const response = await updateProduct(producto._id, data)
            console.log(response.data)
            router.push("/")
        }
        catch(err){
            console.log(err)
        }
    }
    const handleImgUpload = async e=>{

        console.log(e.target.files[0])
  
        const form = new FormData()
        form.append("image", e.target.files[0])
  
        try{
          const response = await upload(form)
          console.log(response)
          setUrlImage(response.data.imageUrl)
        }
        catch(error){
          console.log(error)
        }
      }

    return(
        <Layout>
            <section className={styles.main_login}>
                <form className={styles.login_form}>
                    <h2 className={styles.login_title}>Actualizar producto</h2>
                        <div className={styles.login_form}>       
                        <div style={{position: "relative"}}>
                            <p className={styles.label}>Nombre</p>
                            <input className={styles.input_login} name="nombre" value={data.nombre} onChange={handleChange}/>
                        </div>
                        <div style={{position: "relative"}}>
                            <p className={styles.label}>Precio</p>
                            <input className={styles.input_login} name="precio" value={data.precio} onChange={handleChange}/>
                        </div>
                        <div style={{position: "relative"}}>
                            <p className={styles.label}>Categoria</p>
                            <select className={styles.input_login} defaultValue={data.categoria} name="categoria"  onChange={handleChange}>
                                <option value={"Jamones"}>Jamones</option>
                                <option value={"Paletas"}>Paletas</option>
                                <option value={"Embutidos"}>Embutidos</option>
                                <option value={"Quesos"}>Quesos</option>
                            </select>
                        </div>
                        <div style={{position: "relative"}}>
                            <p className={styles.label}>Descripcion</p>
                            <input className={styles.input_login} name="descripcion" value={data.descripcion} onChange={handleChange}/>
                        </div>
                        <div style={{position: "relative"}}>
                            <p className={styles.label}>Imagen</p>
                            <input className={styles.input_login} type={"file"} name="imagen" value={data.imagen} onChange={handleImgUpload}/>
                            {urlImage && 
                            <div className={styles.img_update}>
                                <Image src={urlImage} fill alt="alt"/>
                            </div>}
                        </div>
                        </div>
                        <button className={styles.login_button} onClick={handleSubmit}>Actualizar</button>
                </form>
            </section>
        </Layout>
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
