import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import CallToAction from '@/components/call-to-action/call-to-action'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Template</title>
        <meta name="description" content="This is a webflow inspired business template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Main">
        <Navbar />
        <section className="Section">
          <div className={styles.introheader}>
            <div className={styles.introcontent}>
              <div className={styles.introtext}>
                <h1 className="HeadingJumbo">Grow your business.</h1>
                <p className="ParagraphBigger">Give your business a boost with a beautifully crafted homepage.</p>
                <Link href="/about"><button className={styles.headingbutton}>ABOUT US</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.introcontainer}>
            <div className={styles.mottowrap}>
              <p className="Label">WHAT WE BELIEVE IN</p>
              <h1 className="HeadingJumboSmall">Grow your business, establish your brand, and put your customers first.</h1>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.homecontentwrap}>
              <div className={styles.aboutgrid}>
                <div className={styles.gridchild}>
                  <div className={styles.HomeSectionWarap}>
                    <p className="Label">ABOUT</p>
                    <h2 className="SeactionHeading">Who we are</h2>
                    <p className="ParagraphLight">
                      Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                      Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.
                    </p>
                  </div>
                  <Link href="/about"><button className="MainButton">ABOUT US</button></Link>
                </div>
                <img src='placeholder-3.svg' className={styles.gridchildimage} alt='about us image' />
              </div>
              <div className={styles.aboutgrid2}>
                <img src='placeholder_1.svg' className={styles.gridchildimage} alt='about the team image' />
                <div className={styles.gridchild}>
                  <div className={styles.HomeSectionWarap}>
                    <p className="Label">TEAM</p>
                    <h2 className="SeactionHeading">What we do</h2>
                    <p className="ParagraphLight">
                      Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                      Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.
                    </p>
                  </div>
                  <Link href="/team"><button className="MainButton">ABOUT THE TEAM</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Section">
          <div className="Container">
            <div className={styles.blogheading}>
              <p className="Label">ABOUT US</p>
              <h2 className="HeadingJumboSmall">Company news</h2>
            </div>
          </div>
          <div className={styles.collectionwrapper}>
            <div className={styles.colelctionblog}>
              <h3 className={styles.BusinessArticleHeading}>10 Quick Tips About Blogging</h3>
              <p className="Label">FEB 21, 2019</p>
              <p className="ParagraphLight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
            <div className={styles.colelctionblog}>
              <h3 className={styles.BusinessArticleHeading}>15 Best Blogs To Follow About Web Design</h3>
              <p className="Label">FEB 21, 2019</p>
              <p className="ParagraphLight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
            <div className={styles.colelctionblog}>
              <h3 className={styles.BusinessArticleHeading}>7 of the Best Examples of Beautiful Blog Design</h3>
              <p className="Label">FEB 21, 2019</p>
              <p className="ParagraphLight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
          </div>
        </section>
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}