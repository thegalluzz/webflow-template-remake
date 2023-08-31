
import styles from '@/styles/Home.module.css'
import Head from 'next/head'


export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Read our policy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.PrivacyPolicySection}>
                <div>
                    <h1>Privacy Policy</h1>
                    <p>INSERT PRIVACY POLICY</p>
                </div>
            </section>
        </>
    )
}