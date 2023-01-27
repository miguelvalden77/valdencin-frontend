import Layout from "@/components/layout";
import { authLogin } from "@/services/auth.services";
import { useState } from "react";


export default function Login(){

    const [data, setData] = useState({usuario: "", email: "", contraseña: ""})

    const handleChange = (evt) => setData({...data, [evt.target.name]: evt.target.value})
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const res = await authLogin(data)
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <Layout>
            <section>
                <form>
                    <h2>Login</h2>
                    <div>
                        <div>
                            <p>Usuario</p>
                            <input value={data.usuario} onChange={handleChange} name="usuario" type={"text"}/>
                        </div>
                        <div>
                            <p>Email</p>
                            <input value={data.email} onChange={handleChange} name="email" type={"text"}/>
                        </div>
                        <div>
                            <p>Contraseña</p>
                            <input value={data.contraseña} onChange={handleChange} name="contraseña" type={"password"}/>
                        </div>
                        <button onSubmit={handleSubmit}>Entrar</button>
                    </div>
                </form>
            </section>
        </Layout>
    )

}
