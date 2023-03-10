import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import main from "../public/images/fondo.jpg"


export default function Home() {
  return (
    <>
      <Layout>
        <section className={styles.main}>
          <h1 className={styles.title}>Jamones y Embutidos Miguel Ángel Martín Rodríguez</h1>
        </section>
      </Layout>
    </>
  )
}
