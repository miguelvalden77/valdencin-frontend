import { useAppWrapper } from "@/components/appWrapper";
import Layout from "@/components/layout";
import { createProduct } from "@/services/product.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function crearProducto(){

    const router = useRouter()

    const [data, setData] = useState({nombre: "", precio: "", categoria: "Jamones", descripcion: "", imagen: ""})
    const context = useAppWrapper()

    useEffect(()=>{
        context.authenticateUser()
    }, [])

    const handleChange = (evt)=> setData({...data, [evt.target.name]: evt.target.value})
    const handleSubmit = async (evt)=> {

        evt.preventDefault()

        try{
            await createProduct(data)
            router.push("/")
        }
        catch(err){
            console.log(err)
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
                            <input name="imagen" value={data.imagen} onChange={handleChange}/>
                        </div>
                        <button onClick={handleSubmit}>Crear</button>
                    </div>
                </form>
            </section>
        </Layout>
    )

}
