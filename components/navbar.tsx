import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Home.module.css'


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarwrapper}>
                <Link href='/'><img src="/business-logo.png" alt="logo" className={styles.navlogo}/></Link>
                <div className={styles.menu}>
                    <div className={styles.navigationitems}>
                        <Link href='/about' className={styles.navigationitem}>ABOUT</Link>
                        <Link href='/projects' className={styles.navigationitem}>WORK</Link>
                        <Link href='/team' className={styles.navigationitem}>TEAM</Link>
                        <Link href='/blog' className={styles.navigationitem}>BLOG</Link>
                        <Link href='/contact' className={styles.navigationitem}>CONTACT</Link>
                    </div>
                </div>
                <Link href='mailto:example@example.com'><button className={styles.mainbutton} >CONTACT US</button></Link>
            </div>
        </nav>
    )
}