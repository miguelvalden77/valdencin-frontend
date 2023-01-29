import Layout from "@/components/layout"
import Link from "next/link"
import styles from "../styles/Error.module.css"

export default function NotFound(){

    return(
        <Layout>
            <main className={styles.not_found}>
                <h1>Parece que te has perdido...</h1>
                <Link href={"/productos"}><button className={styles.not_button}>Salir de aquí</button></Link>
            </main>
        </Layout>
    )

}
