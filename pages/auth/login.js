import { useAppWrapper } from "@/components/appWrapper";
import Layout from "@/components/layout";
import { authLogin } from "@/services/auth.services";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css"


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
            <section className={styles.main_login}>
                <form className={styles.login_form}>
                    <h2 className={styles.login_title}>Login</h2>
                    
                        <div className={styles.input_container}>
                            <p className={styles.label}>Usuario</p>
                            <input className={styles.input_login} value={data.usuario} onChange={handleChange} name="username" type={"text"}/>
                        </div>
                        <div className={styles.input_container}>
                            <p className={styles.label}>Email</p>
                            <input className={styles.input_login} value={data.email} onChange={handleChange} name="email" type={"text"}/>
                        </div>
                        <div className={styles.input_container}>
                            <p className={styles.label}>Contraseña</p>
                            <input className={styles.input_login} value={data.contraseña} onChange={handleChange} name="password" type={"password"}/>
                        </div>
                        <button className={styles.login_button} onClick={handleSubmit}>Entrar</button>
                    
                </form>
            </section>
        </Layout>
    )

}
