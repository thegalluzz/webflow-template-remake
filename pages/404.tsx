import styles from '../styles/Utilities.module.css'
import Head from "next/head"

export default function FourZeroFour() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      </Head>
      <div className={styles.ForOForDiv}>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <a href='/'>
          <button className={styles.ForOForButton}>GO BACK TO SAFETY</button>
        </a>
      </div>
    </>
  )
}