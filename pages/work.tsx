import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar"

export default function Work() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className="Main">
                <Navbar />
            </main>
        </>
    )
}