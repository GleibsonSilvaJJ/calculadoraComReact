import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar (){
    return (
      <nav className={styles.navbarContainer}>
        <ul className={styles.navList}>
            <li >
              <Link className={styles.navLinks} to='/' >Desenvolvimento Softex</Link>
            </li>
            <li>
              <Link className={styles.navLinks} to='/calculadora' >Calculadora</Link>
            </li>
            <li>
              <Link className={styles.navLinks} to='/calculoimc' >Calculo de IMC </Link>
            </li>
          </ul>
      </nav>    
        )

}

export default Navbar