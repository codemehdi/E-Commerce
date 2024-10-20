import Logo from '../assets/Shopping-Cart-Logo.png'
import US_Flag from '../assets/US-flag.png'
import UserPFP from '../assets/user-icon.png'
import styles from './Header.module.css'

function Header(){
    return(
        <>
            <header>
                <div className={styles.Logo}>
                    <img className={styles.LogoPic} src={Logo} alt="Logo" />
                    <p className={styles.LogoName}>
                        <span>S</span>hop
                    </p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Seller</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <img className={styles.USFlag} src={US_Flag} alt="US Flag" />
                    <img className={styles.UserIcon} src={UserPFP} alt="User Icon" />
                </nav>
            </header>
        </>
    );
}

export default Header