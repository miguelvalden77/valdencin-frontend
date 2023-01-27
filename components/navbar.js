import Link from "next/link";


export default function Navbar(){

    return(
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/productos"}>Productos</Link>
            <Link href={"/auth/login"}>Login</Link>
            <Link href={"/admin/crearProducto"}>Crear</Link>
        </nav>
    )

}
