import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
<div style="text-align: center!important;">
    <img alt="MyDoge" src="/dogecoin.png" alt="dogecoin.png"></div>
      </main>

      <footer className={styles.footer}>
        <a
          rel="noopener noreferrer"
        >Coper 2021 MyDoge

        </a>
      </footer>
    </div>
  )
}
