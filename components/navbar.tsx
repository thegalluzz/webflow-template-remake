import Link from "next/link"
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.NavbarWrapper}>
                <Link href='/'><img src="/business-logo.png" alt="logo" className={styles.NavLogo} /></Link>
                <div className={styles.Menu}>
                    <div className={styles.NavigationItems}>
                        <Link href='/about' className={styles.NavigationItem}>ABOUT</Link>
                        <Link href='/projects' className={styles.NavigationItem}>WORK</Link>
                        <Link href='/team' className={styles.NavigationItem}>TEAM</Link>
                        <Link href='/blog' className={styles.NavigationItem}>BLOG</Link>
                        <Link href='/contact' className={styles.NavigationItem}>CONTACT</Link>
                    </div>
                </div>
                <Link href='mailto:example@example.com'><button className={styles.MainButton} > CONTACT US </button></Link>
                <div className={styles.MenuImgDiv}>
                    <img src="/menu-icon.png" alt="logo" className={styles.MenuImg} />
                </div>
            </div>
        </nav>
    )
}