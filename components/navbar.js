import Link from "next/link";
import { useRouter } from "next/router";
import { useAppWrapper } from "./appWrapper";
import styles from "../styles/Navbar.module.css"


export default function Navbar(){

    const context = useAppWrapper()
    const router = useRouter()

    const handleLogout = () =>{
        localStorage.removeItem("authToken")
        context.authenticateUser()
        router.push("/")
    }

    if(context.isOwner === true){
        return(
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/productos"}>Productos</Link>
                <Link href={"/admin/crearProducto"}>Crear</Link>
                <button onClick={handleLogout}>Salir</button>
            </nav>
        )
    }
    return(
        <nav className={styles.nav}>
            <Link href={"/"}>Home</Link>
            <div className={styles.nav_sub}>
                <Link href={"/productos"}>Productos</Link>
                <Link href={"#maps"}>Encuéntranos</Link>
            </div>
        </nav>
    )

}
