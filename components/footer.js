import Link from "next/link"
import styles from "../styles/Footer.module.css"

export default function Footer(){

    return(
        <section className={styles.footer}>
            <h2>Footer</h2>
            <Link href={"/auth/login"}>Login</Link>
        </section>
    )

}
