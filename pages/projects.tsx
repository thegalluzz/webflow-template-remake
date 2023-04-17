import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar/navbar"
import CallToAction from "@/components/call-to-action/call-to-action"
import Footer from "@/components/footer/footer"
import Link from "next/link"

export default function Projects() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/*<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />*/}
            </Head>
            <main className="Main">
                <Navbar />
                <section className="Section">
                    <div className={styles.aboutoheader}>
                        <div>
                            <h1 className="HeadingJumbo">Our work</h1>
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className={styles.ProjectsSectionContainer}>
                        <div className={styles.ProjectsSectionTitle}>
                            <p className="Label">OUR WORK</p>
                            <h2 className="HeadingJumboSmall">Team projects</h2>
                        </div>
                        <div className={styles.ProjectsGrid}>
                            <div>
                                <Link href="/work/project-1"><img src="/portfolio/portfolio1.svg" alt="Portfolio 1" className={styles.PortfolioSVG} /></Link>
                            </div>
                            <div>
                                <p className={styles.ProjectTitle}>Project #1</p>
                                <p className="ParagraphLight">Art direction</p>
                            </div>
                        </div>
                        <div className={styles.ProjectsGrid}>
                            <div>
                                <Link href="/work/project-2"><img src="/portfolio/portfolio1.svg" alt="Portfolio 1" className={styles.PortfolioSVG} /></Link>
                            </div>
                            <div>
                                <p className={styles.ProjectTitle}>Project #2</p>
                                <p className="ParagraphLight">Product Design</p>
                            </div>
                        </div>
                        <div className={styles.ProjectsGrid}>
                            <div>
                                <a href="/work/project-3"><img src="/portfolio/portfolio1.svg" alt="Portfolio 1" className={styles.PortfolioSVG} /></a>
                            </div>
                            <div>
                                <p className={styles.ProjectTitle}>Project #3</p>
                                <p className="ParagraphLight">Animation</p>
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