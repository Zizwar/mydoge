import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My DogeCoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
     
<div style="text-align: center">
    <img alt="MyDoge" src="/dogecoin.png" />
    </div>
      </main>

      <footer className={styles.footer}>
        <a
          rel="noopener noreferrer"
        >© 2021 MyDoge
        </a>
      </footer>
    </div>
  )
}
