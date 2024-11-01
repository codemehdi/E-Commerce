import styles from './footer.module.css'
import emailIcon from '../assets/emailIcon.png'
import phoneIcon from '../assets/phoneIcon.png'
import InstagramIcon from '../assets/instagramIcon.png'
import FacebookIcon from '../assets/facebookIcon.png'
import LinkedInIcon from '../assets/linkedinIcon.png'
import GithubIcon from '../assets/githubIcon.png'

function BottomPage(){
    return(
        <>
            <footer>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>Home</li>
                        <li>Buy</li>
                        <li>Seller</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <button>
                                <img src={emailIcon} alt="Email Icon" />
                            </button>
                            <p>Shop@Example.com</p>
                        </li>
                        <li>
                            <button>
                                <img src={phoneIcon} alt="Phone Icon" />
                            </button>
                            <p>+212 0500000000</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Quick Link</h3>
                    <ul>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={styles.SocialMedia}>
                    <ul>
                        <li>
                            <button>
                                <img src={InstagramIcon} alt="" />
                            </button>
                            <p>Instagram Name</p>
                        </li>
                        <li>
                            <button>
                                <img src={FacebookIcon} alt="" />
                            </button>
                            <p>Facebook Name</p>
                        </li>
                        <li>
                            <button>
                                <img src={LinkedInIcon} alt="" />
                            </button>
                            <p>LinkedIn Name</p>
                        </li>
                        <li>
                            <button>
                                <img src={GithubIcon} alt="" />
                            </button>
                            <p>Github Name</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default BottomPage