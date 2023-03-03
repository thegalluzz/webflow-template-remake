import styles from './call-to-action.module.css'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className={styles.CtaSection}>
            <div className={styles.CtaContainer}>
                <div className={styles.CtaWrapper} >
                    <div>
                        <div className={styles.IntroText}>
                            <h2 className="HeadingJumboSmall"> Grow your business. </h2>
                            <p className="ParagraphBiggerBlack">
                                Today is the day to build the business of your dreams.
                                Share your mission with the world — and blow your customers away.
                            </p>
                        </div>
                        <div>
                            <Link href="/contact"><button className={styles.CtaButton}> START NOW </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}