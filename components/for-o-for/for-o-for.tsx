import styles from "./for-o-for.module.css"

export default function ForOFor(){
    return(
        <div className={styles.ForOForDiv}>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
        <a href='/'>
          <button className={styles.ForOForButton}>GO BACK TO SAFETY</button>
        </a>
      </div>
    )
}