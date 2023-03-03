import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterConentWrapper}>
                <a className={styles.PrivacyPolicy} href='privacy-policy'>Privacy Policy</a>
            </div>
        </footer>
    )
}