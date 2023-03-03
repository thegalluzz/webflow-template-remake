import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import CallToAction from '@/components/call-to-action/cta'
import Footer from '@/components/footer/footer'

export default function Contact() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            </Head>
            <main className="Main">
                <Navbar />
                <section className="Section">
                    <div className={styles.aboutoheader}>
                        <div>
                            <h1 className="HeadingJumbo">Contact Us</h1>
                        </div>
                    </div>
                </section>
                <section className={styles.aboutserveicessection}>
                    <div className={styles.ContactGridContainer}>
                        <div className={styles.contactusgrid}>
                            <div className={styles.contacusformwrap}>
                                <div className={styles.contactustextdiv}>
                                    <h2 className="HeadingJumboSmall">Contact us</h2>
                                    <p className="ParagraphLight">
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                    </p>
                                </div>
                                <form action="/" className={styles.contactform}>
                                    <label htmlFor="fname" className={styles.contanctformlabel}>NAME</label>
                                    <input type="text" id="fname" name="fname" placeholder="Enter your name" className={styles.contanctforminput} />
                                    <label htmlFor="email" className={styles.contanctformlabel}>EMAIL ADDRESS</label>
                                    <input type="text" id="email" name="email" placeholder="Enter your email" className={styles.contanctforminput} />
                                    <label htmlFor="message" className={styles.contanctformlabel}>MESSAGE</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Hi there, I'm reaching out because I think we can collaborate…"
                                        className={styles.ContanctFormInputMessage} />
                                    <input type="submit" value="Submit" className={styles.contactformbutton} />
                                </form>
                            </div>
                            <div>
                                <div>
                                    <p className="LabelDark">OUR OFFICES</p>
                                    <p className="ParagraphLight">
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                    </p>
                                </div>
                                <div>
                                    <p className="LabelDark">OUR OFFICE</p>
                                    <p className="ParagraphLight">908 Broadway, San Francisco,CA 94133</p>
                                </div>
                                <div>
                                    <p className="LabelDark">WORKING HOURS</p>
                                    <p className="ParagraphLight">9AM - 3PM, Mon to Fri</p>
                                </div>
                                <div>
                                    <p className="LabelDark">CONTACT</p>
                                    <a href="" className="ParagraphLight">contact@business.com</a>
                                    <p className="ParagraphLight">01 (650) 658 6822</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.MapSection}>
                    <div className={styles.MapDiv}>
                        <h1> </h1>
                    </div>
                </section>
                <section className={styles.OurServicesSection}>
                    <div className={styles.OurServicesContainer}>
                        <div>
                            <p>WHAT ARE WE BEST AT</p>
                            <h2 className="HeadingJumboSmall">Our Services</h2>
                        </div>
                        <div className={styles.OurServicesGrid}>
                            <div className={styles.OurServicesGridChild}>
                                {/*<img src="/incons/Icon_1.svg" alt="photo" />*/}
                                <div className={styles.OurServiceGridDiv} />
                                <div>
                                    <p>Amanda Peterson</p>
                                    <p className="ParagraphLight">CEO</p>
                                </div>
                                <div className={styles.DividerGrid}></div>
                                <div>
                                    <p className="ParagraphLight">ceo@business.com</p>
                                    <p className="ParagraphLight">01 (650) 658 6823</p>
                                </div>
                            </div>
                            <div className={styles.OurServicesGridChild}>
                                {/*<img src="/incons/Icon_1.svg" alt="photo" />*/}
                                <div className={styles.OurServiceGridDiv} />
                                <div>
                                    <p>Jason Smith</p>
                                    <p className="ParagraphLight">CTO</p>
                                </div>
                                <div className={styles.DividerGrid}></div>
                                <div>
                                    <p className="ParagraphLight">cto@business.com</p>
                                    <p className="ParagraphLight">01 (650) 658 6824</p>
                                </div>
                            </div>
                            <div className={styles.OurServicesGridChild}>
                                {/*<img src="/incons/Icon_1.svg" alt="photo" />*/}
                                <div className={styles.OurServiceGridDiv} />
                                <div>
                                    <p>Michael Fassbender</p>
                                    <p className="ParagraphLight">Design Director</p>
                                </div>
                                <div className={styles.DividerGrid}></div>
                                <div>
                                    <p className="ParagraphLight">cto@business.com</p>
                                    <p className="ParagraphLight">01 (650) 658 6824</p>
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