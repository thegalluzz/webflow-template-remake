import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar"
import CallToAction from "@/components/cta"
import Footer from "@/components/footer"

export default function ProjectTwo() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <CallToAction />
                <Footer />
            </main>
        </>
    )
}