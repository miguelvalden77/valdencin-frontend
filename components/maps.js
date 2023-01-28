import styles from "../styles/Maps.module.css"

export default function Maps(){

    return(
        <section id="maps" className={styles.container}>
            <iframe className={styles.maps} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12240.60825364553!2d-6.4071865!3d39.9156131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2929d81a2cd6b97!2sEmbutidos%20y%20Jamones%20Miguel%20Angel%20Mart%C3%ADn!5e0!3m2!1ses!2ses!4v1674723310917!5m2!1ses!2ses" width="600" height="450" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )

}
