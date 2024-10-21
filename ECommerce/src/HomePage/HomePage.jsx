import HomePagePic from '../assets/HomePic.png';
import styles from './HomePage.module.css'

function HomePage(){
    return(
        <>
            <main>
                <div className={styles.SectionContainers}>
                    <section className={styles.TextSection}>
                        <p className={styles.BigText}>Efficient. Affordable. <br /> 
                        <span>Shop</span> Now </p>
                        <p className={styles.SmallText}>Shopping Has Just Become Affordable And Easy For Everyone.</p>
                        <div className={styles.inputContainer}>
                            <input type="text" placeholder='Enter Your Email'/>
                            <button>Submit</button>
                        </div>
                    </section>
                    <section className={styles.ImageSection}>
                        <img src={HomePagePic} alt="HomePage Picture" />
                    </section>
                </div>
            </main>
        </>
    )
}

export default HomePage