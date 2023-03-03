import Link from "next/link"
import styles from './navbar.module.css'
import { useState } from "react"

export default function Navbar() {
    const [navigationItems, setNavigationItems] = useState(false);
    return (
        <>
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
                    <Link href='mailto:example@example.com'><button className="MainButton" > CONTACT US </button></Link>
                    <div className={styles.MenuImgDiv} onClick={() => setNavigationItems(!navigationItems)}>
                        <img src="/menu-icon.png" alt="logo" className={styles.MenuImg} />
                    </div>
                </div>
            </nav>
            {
                (navigationItems)
                    ?
                    <div className={styles.NavigationItemsMobile}>
                        <Link href='/about' className={styles.NavigationItemMobile}>ABOUT</Link>
                        <Link href='/projects' className={styles.NavigationItemMobile}>WORK</Link>
                        <Link href='/team' className={styles.NavigationItemMobile}>TEAM</Link>
                        <Link href='/blog' className={styles.NavigationItemMobile}>BLOG</Link>
                        <Link href='/contact' className={styles.NavigationItemMobile}>CONTACT</Link>
                    </div>
                    :
                    <></>
            }
        </>
    )
}