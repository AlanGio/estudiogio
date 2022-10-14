import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estudio Jurídico - Giojelli &amp; Asoc.</title>
        <meta name="description" content="Estudio Jurídico - Giojelli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.svg" alt="Estudio Giojelli" width={400} height={300} />
      </main>
    </div>
  )
}
