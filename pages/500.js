import Layout from "@/components/layout"
import Link from "next/link"
import styles from "../styles/Error.module.css"

export default function ErrorPage(){

    return(
        <Layout>
            <main className={styles.not_found}>
                <h1>Parece que hay un error ...</h1>
                <Link href={"/productos"}><button className={styles.not_button}>Salir de aquí</button></Link>
            </main>
        </Layout>
    )

}
