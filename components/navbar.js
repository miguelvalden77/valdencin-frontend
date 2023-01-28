import Link from "next/link";
import { useRouter } from "next/router";
import { useAppWrapper } from "./appWrapper";


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
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/productos"}>Productos</Link>
            <Link href={"/auth/login"}>Login</Link>
        </nav>
    )

}
