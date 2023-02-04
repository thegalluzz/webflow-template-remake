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
                            <h1 className={styles.headingjumbo}>Contact Us</h1>
                        </div>
                    </div>
                </section>

                <section className={styles.aboutserveicessection}>
                    <div>
                        <div className={styles.contactusgrid}>
                            <div className={styles.contacusformwrap}>
                                <div>
                                    <h2>Contact us</h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life 
                                        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                    </p>
                                </div>
                                <form action="/">
                                    <label htmlFor="fname">NAME</label><br />
                                    <input type="text" id="fname" name="fname" placeholder="Enter your name" /><br />
                                    <label htmlFor="lname">EMAIL ADDRESS</label><br />
                                    <input type="text" id="email" name="email" placeholder="Enter your email" />
                                    <label htmlFor="lname">EMAIL ADDRESS</label><br />
                                    <textarea id="message" name="message" placeholder="Hi there, I'm reaching out because I think we can collaborate…" /><br/><br/>
                                    <input type="submit" value="Submit"  className={styles.ctabutton}/>
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