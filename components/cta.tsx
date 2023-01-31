import styles from '@/styles/Home.module.css'

export default function CallToAction() {
    return (
        <section>
            <div className={styles.ctaWrapper}>
                <div className={styles.introdiv}>
                    <div className={styles.introtext}>
                        <h2>Grow your business.</h2>
                        <text>
                            Today is the day to build the business of your dreams.
                            Share your mission with the world — and blow your customers away.
                        </text>
                    </div>
                    <div>
                        <button className={styles.ctabutton}>START NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}