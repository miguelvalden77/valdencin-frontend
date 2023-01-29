import Image from "next/image"
import what from "../public/images/whatsapp.png"
import styles from "../styles/Whatsapp.module.css"

export default function Whatsapp(){

    return <a href="https://wa.me/+34661756937" referrerPolicy="no-referrer" target={"_blank"}>
        <Image className={styles.what} src={what} width={50} height={50} alt="phone"/>
    </a>

}
