import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className={styles.CtaSection}>
            <div className={styles.CtaContainer}>
                <div className={styles.ctaWrapper} >
                    <div>
                        <div className={styles.introtext}>
                            <h2>Grow your business.</h2>
                            <text>
                                Today is the day to build the business of your dreams.
                                Share your mission with the world — and blow your customers away.
                            </text>
                        </div>
                        <div>
                            <Link href="/contact"><button className={styles.ctabutton}>START NOW</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}