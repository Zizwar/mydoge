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
    <img alt="MyDoge" src="/dogecoin.png" />
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
