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
                <section className={styles.headersection}>
                    <div className={styles.aboutoheader}>
                        <div>
                            <h1 className={styles.HeadingJumbo}>Contact Us</h1>
                        </div>
                    </div>
                </section>
                <section className={styles.aboutserveicessection}>
                    <div className={styles.ContactGridContainer}>
                        <div className={styles.contactusgrid}>
                            <div className={styles.contacusformwrap}>
                                <div className={styles.contactustextdiv}>
                                    <h2>Contact us</h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                    </p>
                                </div>
                                <form action="/" className={styles.contactform}>
                                    <label htmlFor="fname" className={styles.contanctformlabel}>NAME</label>
                                    <input type="text" id="fname" name="fname" placeholder="Enter your name" className={styles.contanctforminput} />
                                    <label htmlFor="email" className={styles.contanctformlabel}>EMAIL ADDRESS</label>
                                    <input type="text" id="email" name="email" placeholder="Enter your email" className={styles.contanctforminput} />
                                    <label htmlFor="message" className={styles.contanctformlabel}>MESSAGE</label>
                                    <textarea id="message" name="message" placeholder="Hi there, I'm reaching out because I think we can collaborate…" className={styles.contanctforminput} />
                                    <input type="submit" value="Submit" className={styles.contactformbutton} />
                                </form>
                            </div>
                            <div>
                                <div>
                                    <p>Our offices </p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                                <div>
                                    <p>OUR OFFICE</p>
                                    <p>908 Broadway, San Francisco,CA 94133</p>
                                </div>
                                <div>
                                    <p>WORKING HOURS</p>
                                    <p>9AM - 3PM, Mon to Fri</p>
                                </div>
                                <div>
                                    <p>CONTACT</p>
                                    <a href="">contact@business.com</a>
                                    <p>01 (650) 658 6822</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.MapSection}>
                    <div className={styles.MapDiv}>
                        <h1>Put the map here</h1>
                    </div>
                </section>
                <section className={styles.OurServicesSection}>
                    <div className={styles.OurServicesContainer}>
                        <div>
                            <p>What we are best at</p>
                            <h2>Our Services</h2>
                        </div>
                        <div className={styles.OurServicesGrid}>
                            <div className={styles.OurServicesGridChild}>
                                <img src="/incons/Icon_1.svg" alt="photo" />
                                <div>
                                    <p>Amanda Peterson</p>
                                    <p>CEO</p>
                                </div>
                                <div className={styles.DividerGrid}></div>
                                <div>
                                    <p>ceo@business.com</p>
                                    <p>01 (650) 658 6823</p>
                                </div>
                            </div>
                            <div className={styles.OurServicesGridChild}>
                                <img src="/incons/Icon_1.svg" alt="" />
                                <div>
                                    <p>Jason Smith</p>
                                    <p>CTO</p>
                                </div>
                                <div className={styles.DividerGrid}></div>
                                <div>
                                    <p>cto@business.com</p>
                                    <p>01 (650) 658 6824</p>
                                </div>
                            </div>
                            <div className={styles.OurServicesGridChild}>
                                <img src="/incons/Icon_1.svg" alt="" />
                                <div>
                                    <p>Michael Fassbender</p>
                                    <p>Design Director</p>
                                </div>
                                <div className={styles.DividerGrid}></div>
                                <div>
                                    <p>cto@business.com</p>
                                    <p>01 (650) 658 6824</p>
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