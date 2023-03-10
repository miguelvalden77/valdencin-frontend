import { useAppWrapper } from "@/components/appWrapper";
import Layout from "@/components/layout";
import { createProduct } from "@/services/product.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { upload } from "@/services/upload.services";
import styles from "../../styles/Login.module.css";


export default function crearProducto(){

    const router = useRouter()

    const [data, setData] = useState({nombre: "", precio: "", categoria: "Jamones", descripcion: ""})
    const [urlImage, setUrlImage] = useState("")
    const context = useAppWrapper()

    useEffect(()=>{
        context.authenticateUser()
        context.verificar()
    }, [])

    const handleChange = (evt)=> setData({...data, [evt.target.name]: evt.target.value})
    const handleSubmit = async (evt)=> {

        evt.preventDefault()

        try{
            await createProduct({nombre: data.nombre, precio: data.precio, categoria: data.categoria, descripcion: data.descripcion, imagen: urlImage})
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
                    <h2 className={styles.login_title}>Crear producto</h2>
                    
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
                        </div>
                        <div>
                            {urlImage && <Image alt={data.descripcion} src={urlImage} width={140} height={300}/>}
                        </div>
                        <button className={styles.login_button} onClick={handleSubmit}>Crear</button>
                    
                </form>
            </section>
        </Layout>
    )

}
