import { useAppWrapper } from "@/components/appWrapper";
import Layout from "@/components/layout";
import { createProduct } from "@/services/product.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { upload } from "@/services/upload.services";


export default function crearProducto(){

    const router = useRouter()

    const [data, setData] = useState({nombre: "", precio: "", categoria: "Jamones", descripcion: ""})
    const [urlImage, setUrlImage] = useState("")
    const context = useAppWrapper()

    useEffect(()=>{
        context.authenticateUser()
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
            <section>
                <form>
                    <h2>Crear producto</h2>
                    <div>
                        <div>
                            <p>Nombre</p>
                            <input name="nombre" value={data.nombre} onChange={handleChange}/>
                        </div>
                        <div>
                            <p>Precio</p>
                            <input name="precio" value={data.precio} onChange={handleChange}/>
                        </div>
                        <div>
                            <p>Categoria</p>
                            <select defaultValue={data.categoria} name="categoria"  onChange={handleChange}>
                                <option value={"Jamones"}>Jamones</option>
                                <option value={"Paletas"}>Paletas</option>
                                <option value={"Embutidos"}>Embutidos</option>
                                <option value={"Quesos"}>Quesos</option>
                            </select>
                        </div>
                        <div>
                            <p>Descripcion</p>
                            <input name="descripcion" value={data.descripcion} onChange={handleChange}/>
                        </div>
                        <div>
                            <p>Imagen</p>
                            <input type={"file"} name="imagen" value={data.imagen} onChange={handleImgUpload}/>
                        </div>
                        <div>
                            {urlImage && <Image alt={data.descripcion} src={urlImage} width={140} height={300}/>}
                        </div>
                        <button onClick={handleSubmit}>Crear</button>
                    </div>
                </form>
            </section>
        </Layout>
    )

}
