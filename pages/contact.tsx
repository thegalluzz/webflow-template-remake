import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import CallToAction from '@/components/cta'
import Footer from '@/components/footer'

export default function Contact() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <section>
                    <div>
                        <div>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <div>

                        </div>
                    </div>
                </section>

                <section>

                </section>

                <section>
                    
                </section>


                <CallToAction />
                <Footer />
            </main>
        </>
    )
}