import Cards from '../Cards/Cards.jsx'
import styles from './About.module.css'
import AboutPicture from '../assets/aboutPicture.webp'

function About(){
    return(
        <>
            <section className={styles.AboutContainer}>
                <div className={styles.AboutPicText}>
                    <div className={styles.AboutPictureFrame}>
                        <img src={AboutPicture} alt="About Image" />
                    </div>
                    <div className={styles.AboutText}>
                        <h3 className={styles.AboutHeading}>
                            About
                        </h3>
                        <p className={styles.AboutParagraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti culpa recusandae earum, accusantium tenetur consequuntur vel, quis fugiat et quaerat repudiandae dicta sequi quibusdam cumque minus nemo, in magni? Vitae, illum provident error fugiat animi, accusamus nulla repellendus blanditiis cupiditate temporibus recusandae totam ipsam id deleniti, doloremque quisquam minus!
                        </p>
                    </div>
                </div>
                <Cards />
            </section>
        </>
    )
}

export default About