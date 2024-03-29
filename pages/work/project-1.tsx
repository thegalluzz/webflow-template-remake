import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar/navbar"
import CallToAction from "@/components/call-to-action/call-to-action"
import Footer from "@/components/footer/footer"

export default function ProjectOne() {
    return (
        <>
            <Head>
                <title>Project 1</title>
                <meta name="description" content="Here is our first project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className="Main">
                <Navbar />
                <section className="Section">
                    <div className={styles.IntroHeaderProjectOne}>
                        <div className={styles.IntroContentProject}>
                            <div className={styles.IntroTextProject}>
                                <h1 className="HeadingJumbo">Project #1</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className={styles.ProjectDescritionContainer}>
                        <div className={styles.ProjectDescritionGrid}>
                            <div>
                                <div>
                                    <p className="LabelDark">DESCRIPTION</p>
                                    <p className="ParagraphLight">
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                        Separated they live in Bookmarksgrove right at the coast.
                                    </p>
                                </div>
                                <div>
                                    <p className="LabelDark">WHEN</p>
                                    <p className="ParagraphLight">January 2017</p>
                                </div>
                                <div>
                                    <p className="LabelDark">WHO</p>
                                    <p className="ParagraphLight">
                                        Jason Davis, John Anderson, Mirco Cattabriga, Aaron Jones, Amanda Johnson, Steve McQueen
                                    </p>
                                </div>
                            </div>
                            <p className="ParagraphLight">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                <br /><br />
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                <br /><br />
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={styles.ProjectDescritionContainer}>
                        <div className={styles.ProjectDescritionImageDiv}>
                            <img src="/portfolio/portfolio1.svg" alt="" className={styles.PortfolioSVG} />
                        </div>

                        <div className={styles.ProjectDescritionImageDiv}>
                            <img src="/portfolio/portfolio2.svg" alt="" className={styles.PortfolioSVG} />
                        </div>

                        <div className={styles.ProjectDescritionImageDiv}>
                            <img src="/portfolio/portfolio3.svg" alt="" className={styles.PortfolioSVG} />
                        </div>
                    </div>
                </section>
                <CallToAction />
                <Footer />
            </main>
        </>
    )
}