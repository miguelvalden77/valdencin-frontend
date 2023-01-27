import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar(){

    const router = useRouter()

    const handleLogout = () =>{
        localStorage.removeItem("authToken")
        router.push("/")
    }

    return(
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/productos"}>Productos</Link>
            <Link href={"/auth/login"}>Login</Link>
            <Link href={"/admin/crearProducto"}>Crear</Link>
            <button onClick={handleLogout}>Salir</button>
        </nav>
    )

}
