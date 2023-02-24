import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CallToAction from "@/components/cta"

export default function Blog() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <div  className={styles.headersection}>
                    <div className={styles.aboutoheader}>
                        <h1 className={styles.HeadingJumbo}>Our Blog</h1>
                    </div>
                </div>
                <section className={styles.BlogSection}>
                    <div className={styles.BlogContainer}>
                        <div>
                            <div className={styles.BlogTextDiv}>
                                <p>Aperiam harum</p>
                                <h2>Our Stories</h2>
                            </div>
                            <div className={styles.BlogDivCard}>
                                <img src="/placeholder_1.svg" alt="" className={styles.PortfolioSVG} />
                                <div className={styles.BlogDescription}>
                                    <div>
                                        <h2>10 Quick Tips About Blogging</h2>
                                        <p>
                                            Sit quam quae perferendis harum amet dolorum possimus minus.
                                            Occaecati magnam animi quasi dolor quae et aut.
                                            Autem voluptas alias nobis in odit.
                                            Aperiam harum eum modi neque.
                                            Ipsum iusto beatae et esse nobis illum hic natus.
                                            Sapiente non cumque quia facilis.
                                            Quo est odio culpa eaque sit ipsum mol
                                        </p>
                                        <p>FEBRUARY 21, 2019</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.BlogDivCard}>
                                <img src="/placeholder_1.svg" alt="" className={styles.PortfolioSVG} />
                                <div className={styles.BlogDescription}>
                                    <div>
                                        <h2>10 Quick Tips About Blogging</h2>
                                        <p>
                                            Sit quam quae perferendis harum amet dolorum possimus minus.
                                            Occaecati magnam animi quasi dolor quae et aut.
                                            Autem voluptas alias nobis in odit.
                                            Aperiam harum eum modi neque.
                                            Ipsum iusto beatae et esse nobis illum hic natus.
                                            Sapiente non cumque quia facilis.
                                            Quo est odio culpa eaque sit ipsum mol
                                        </p>
                                        <p>FEBRUARY 21, 2019</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.BlogDivCard}>
                                <img src="/placeholder_1.svg" alt="" className={styles.PortfolioSVG} />
                                <div className={styles.BlogDescription}>
                                    <div>
                                        <h2>10 Quick Tips About Blogging</h2>
                                        <p>
                                            Sit quam quae perferendis harum amet dolorum possimus minus.
                                            Occaecati magnam animi quasi dolor quae et aut.
                                            Autem voluptas alias nobis in odit.
                                            Aperiam harum eum modi neque.
                                            Ipsum iusto beatae et esse nobis illum hic natus.
                                            Sapiente non cumque quia facilis.
                                            Quo est odio culpa eaque sit ipsum mol
                                        </p>
                                        <p>FEBRUARY 21, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CallToAction />
                <Footer />
            </main>
        </>
    )
}