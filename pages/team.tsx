import Head from "next/head"
import Navbar from "@/components/navbar"
import styles from "@/styles/Home.module.css"
import CallToAction from "@/components/cta"
import Footer from "@/components/footer"

export default function Team() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <section className={styles.headersection}>
                    <div className={styles.aboutoheader}>
                        <div>
                            <h1 className={styles.HeadingJumbo}>Team</h1>
                        </div>
                    </div>
                </section>
                <section className={styles.OurTeamSection}>
                    <div className={styles.OurTeamSectionContainer}>
                        <div className={styles.OurTeamGridTitle}>
                            <p className={styles.Label}>OUR PEOPLE</p>
                            <h2  className={styles.HeadingJumboSmall}>Our world-class team</h2>
                        </div>
                        <div className={styles.OurTeamGrid}>
                            <div>
                                <div className={styles.TeamMemberPicture}>
                                    {/*<img src="/incons/Icon_1.svg" alt="" />*/}
                                </div>
                                <div className={styles.OurTeamGridChildText}>
                                    <p>Michael Fassbender</p>
                                    <p className={styles.ParagraphLight}>CEO</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.TeamMemberPicture}>
                                    {/*<img src="/incons/Icon_1.svg" alt="" />*/}
                                </div>
                                <div className={styles.OurTeamGridChildText}>
                                    <p>Jason Smith</p>
                                    <p className={styles.ParagraphLight}>Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.TeamMemberPicture}>
                                    {/*<img src="/incons/Icon_1.svg" alt="" />*/}
                                </div>
                                <div className={styles.OurTeamGridChildText}>
                                    <p>Amanda Peterson</p>
                                    <p className={styles.ParagraphLight}>Design Director</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.TeamMemberPicture}>
                                    {/*<img src="/incons/Icon_1.svg" alt="" />*/}
                                </div>
                                <div className={styles.OurTeamGridChildText}>
                                    <p>Billy Maxwell</p>
                                    <p className={styles.ParagraphLight}>Lead Developer</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.TeamMemberPicture}>
                                    {/*<img src="/incons/Icon_1.svg" alt="" />*/}
                                </div>
                                <div className={styles.OurTeamGridChildText}>
                                    <p>Joshua Harris</p>
                                    <p className={styles.ParagraphLight}>CTO</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.TeamMemberPicture}>
                                    {/*<img src="/incons/Icon_1.svg" alt="" />*/}
                                </div>
                                <div className={styles.OurTeamGridChildText}>
                                    <p>Esther Ford</p>
                                    <p className={styles.ParagraphLight}>Recruiter</p>
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