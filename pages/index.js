import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Tackle Tampon Tax</title>
      </Head>
      
    </div>
    <body>
      <a href="/donate"> DONATE </a>
      <a href="/taxInfo"> WHAT IS THE TAX </a>
      <a href="/periodFax"> PERIOD FAX </a>
      <a href="/pickUp"> PICK UP </a>
    </body>
    </>
  )
}
