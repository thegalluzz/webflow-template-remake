import Link from 'next/link'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import CallToAction from '@/components/cta'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.headersection}>
          <div className={styles.introheader}>
            <div className={styles.introcontent}>
              <div className={styles.introtext}>
                <h1 className={styles.HeadingJumbo}>Grow your business.</h1>
                <p className={styles.ParagraphBigger}>Give your business a boost with a beautifully crafted homepage.</p>
                <Link href="/about"><button className={styles.headingbutton}>LEARN MORE</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.introcontainer}>
            <div className={styles.mottowrap}>
              <p className={styles.mottolabel}>WHAT WE BELIEVE IN</p>
              <h1 className={styles.HeadingJumboSmall}>Grow your business, establish your brand, and put your customers first.</h1>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.homecontentwrap}>
              <div className={styles.aboutgrid}>
                <div className={styles.gridchild}>
                  <div className={styles.HomeSectionWarap}>
                    <p className={styles.Label}>ABOUT</p>
                    <h2 className={styles.SeactionHeading}>Who we are</h2>
                    <p className={styles.ParagraphLight}>
                      Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                      Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.
                    </p>
                  </div>
                  <Link href="/about"><button className={styles.mainbutton}>LEARN MORE</button></Link>
                </div>
                <img src='placeholder-3.svg' className={styles.gridchild} />
              </div>
              <div className={styles.aboutgrid2}>
                <img src='placeholder_1.svg' className={styles.gridchild} />
                <div className={styles.gridchild}>
                  <div className={styles.HomeSectionWarap}>
                    <p className={styles.Label}>TEAM</p>
                    <h2 className={styles.SeactionHeading}>What we do</h2>
                    <p className={styles.ParagraphLight}>
                      Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                      Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.
                    </p>
                  </div>
                  <Link href="/team"><button className={styles.mainbutton}>LEARN MORE</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.blogheading}>
              <p className={styles.Label}>ABOUT US</p>
              <h2 className={styles.HeadingJumboSmall}>Company news</h2>
            </div>
          </div>
          <div className={styles.collectionwrapper}>
            <div className={styles.colelctionblog}>
              <h3>10 Quick Tips About Blogging</h3>
              <text>FEB 21, 2019</text>
              <p>Sit quam quae perferendis harum amet dolorum possimus minus.
                Occaecati magnam animi quasi dolor quae et aut.
                Autem voluptas alias nobis in odit.
                Aperiam harum eum modi neque.
                Ipsum iusto beatae et esse nobis illum hic natus.
                Sapiente non cumque quia facilis.
                Quo est odio culpa eaque sit ipsum mol</p>
            </div>
            <div className={styles.colelctionblog}>
              <h3>10 Quick Tips About Blogging</h3>
              <text>FEB 21, 2019</text>
              <p>Sit quam quae perferendis harum amet dolorum possimus minus.
                Occaecati magnam animi quasi dolor quae et aut.
                Autem voluptas alias nobis in odit.
                Aperiam harum eum modi neque.
                Ipsum iusto beatae et esse nobis illum hic natus.
                Sapiente non cumque quia facilis.
                Quo est odio culpa eaque sit ipsum mol</p>
            </div>
            <div className={styles.colelctionblog}>
              <h3>10 Quick Tips About Blogging</h3>
              <text>FEB 21, 2019</text>
              <p>Sit quam quae perferendis harum amet dolorum possimus minus.
                Occaecati magnam animi quasi dolor quae et aut.
                Autem voluptas alias nobis in odit.
                Aperiam harum eum modi neque.
                Ipsum iusto beatae et esse nobis illum hic natus.
                Sapiente non cumque quia facilis.
                Quo est odio culpa eaque sit ipsum mol</p>
            </div>
          </div>
        </section>
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}