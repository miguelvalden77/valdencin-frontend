import { useAppWrapper } from "@/components/appWrapper";
import Layout from "@/components/layout";
import { authLogin } from "@/services/auth.services";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Login(){

    const context = useAppWrapper()
    const router = useRouter()
    const [data, setData] = useState({username: "", email: "", password: ""})

    const handleChange = (evt) => setData({...data, [evt.target.name]: evt.target.value})
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const response = await authLogin(data)
            const {authToken} = response.data
            localStorage.setItem("authToken", authToken)
            context.authenticateUser()
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
                    <h2>Login</h2>
                    <div>
                        <div>
                            <p>Usuario</p>
                            <input value={data.usuario} onChange={handleChange} name="username" type={"text"}/>
                        </div>
                        <div>
                            <p>Email</p>
                            <input value={data.email} onChange={handleChange} name="email" type={"text"}/>
                        </div>
                        <div>
                            <p>Contraseña</p>
                            <input value={data.contraseña} onChange={handleChange} name="password" type={"password"}/>
                        </div>
                        <button onClick={handleSubmit}>Entrar</button>
                    </div>
                </form>
            </section>
        </Layout>
    )

}
