import styles from '@/styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerConentWrapper}>
                <a className={styles.privacypolicy} href='privacy-policy'>Privacy Policy</a>
            </div>
        </footer>
    )
}