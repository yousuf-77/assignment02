import styles from './header.module.css'
import Link from "next/link"
const Header=()=>{
  return(
    <header>
  <nav>
    <ul className={styles.ul}>
      <li className={styles.li}><Link className={styles.link} href={'./'}>Home</Link></li>
      <li className={styles.li}><Link className={styles.link} href={'./about'}>About</Link></li>
      <li className={styles.li}><Link className={styles.link} href={'./services'}>Services</Link></li>
      <li className={styles.li}><Link className={styles.link} href={'./contact'}>Contact</Link></li>
      
    </ul>
  </nav>
  </header>
  )
}
export default Header