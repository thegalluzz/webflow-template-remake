import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import CallToAction from '@/components/call-to-action/call-to-action'
import Footer from '@/components/footer/footer'


export default function About() {
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
                            <h1 className="HeadingJumbo">About Us</h1>
                        </div>
                    </div>
                    <div className={styles.aboutcontainer}>
                        <div className={styles.mottowrap}>
                            <h1 className="HeadingJumboSmall">
                                We're a group of creative thinkers who have built a business to change the world.
                            </h1>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.AboutStoryWrap}>
                            <p className="ParagraphLight">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                            <p className="ParagraphLight">
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli,
                                but the Little Blind Text didn't listen.
                            </p>
                            <p className="ParagraphLight">
                                She packed her seven versalia, put her initial into the belt and made herself on the way.
                                When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove,
                                the headline of Alphabet Village and the subline of her own road, the Line Lane.
                            </p>
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                </section>
                <section className={styles.aboutserveicessection}>
                    <div className={styles.aboutserveicescontainer}>
                        <div className={styles.aboutsectionheadingwrap}>
                            <p className="Label">
                                WHAT WE ARE BEST AT
                            </p>
                            <h2 className="HeadingJumboSmall">
                                Our Services
                            </h2>
                        </div>
                        <div className={styles.servicsegrid}>
                            <div>
                                <img src="/incons/Icon_1.svg" className={styles.ServiceGridChildImg} />
                                <p className="ParagraphBiggerBlack">Support</p>
                                <p className="ParagraphLight">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                                </p>
                            </div>
                            <div>
                                <img src="/incons/Icon_4.svg" className={styles.ServiceGridChildImg} />
                                <p className="ParagraphBiggerBlack">Strategy</p>
                                <p className="ParagraphLight">
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                </p>
                            </div>
                            <div>
                                <img src="/incons/Icon_3.svg" className={styles.ServiceGridChildImg} />
                                <p className="ParagraphBiggerBlack">Management</p>
                                <p className="ParagraphLight">
                                    Blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                                </p>
                            </div>
                            <div>
                                <img src="/incons/Icon_3.svg" className={styles.ServiceGridChildImg} />
                                <p className="ParagraphBiggerBlack">Training</p>
                                <p className="ParagraphLight">
                                    Blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                                </p>
                            </div>
                            <div>
                                <img src="/incons/Icon_2.svg" className={styles.ServiceGridChildImg} />
                                <p className="ParagraphBiggerBlack">Consulting</p>
                                <p className="ParagraphLight">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                                </p>
                            </div>
                            <div>
                                <img src="/incons/Icon_1.svg" className={styles.ServiceGridChildImg} />
                                <p className="ParagraphBiggerBlack"> Events </p>
                                <p className="ParagraphLight">
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                </p>
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