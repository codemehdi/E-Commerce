import styles from './Categories.module.css'
import GamingPic from '../assets/GamingBackground.jpeg'
import ElectronicsBackground from '../assets/ElectronicsBackground.webp'
import AccessoriesBackground from '../assets/AccessoriesBackground.webp'
import ToysBackground from '../assets/ToysBackground.webp'
import ClothingBackground from '../assets/ClothingBackground.webp'
import ElectronicsBtn from '../assets/ElectronicsBtn.png'
import ClothesBtn from '../assets/ClothesBtn.png'
import AccessoriesBtn from '../assets/AccessoriesBtn.png'
import ToysBtn from '../assets/ToysBtn.png'
import GamingBtn from '../assets/GamingBtn.png'


function Categories(){
    return(
        <>
            <h3 className={styles.CategoriesBigTitle}>Categories</h3>
            <div className={styles.CategoriesContainer}>
                <section className={styles.CategorySectionOne}>
                    <div className={styles.ElectronicSection}>
                        <p className={styles.ElectronicsParagraph}>Electronics</p>
                        <button className={styles.SectionBtn}>
                            <img src={ElectronicsBtn} alt="Play Icon" />
                        </button>
                        <img loading='lazy'  src={ElectronicsBackground} alt="Electronics Background" />
                    </div>
                    <div className={styles.ClothesSection}>
                        <p className={styles.ClothesParagraph}>Clothes</p>
                        <button className={styles.SectionBtn}>
                            <img src={ClothesBtn} alt="Play Icon" />
                        </button>
                        <img loading='lazy' src={ClothingBackground} alt="Clothing Background" />
                    </div>
                </section>


                <section className={styles.CategorySectionTwo}>
                    <div className={styles.AccessorySection}>
                        <p className={styles.AccessoryParagraph}>Accessories</p>
                        <button className={styles.SectionBtn}>
                            <img src={AccessoriesBtn} alt="Play Icon" />
                        </button>
                        <img loading='lazy'  src={AccessoriesBackground} alt="Accessories Background" />
                    </div>
                    <div className={styles.ToysSection}>
                        <p className={styles.ToysParagraph}>Toys</p>
                        <button className={styles.SectionBtn}>
                            <img src={ToysBtn} alt="Play Icon" />
                        </button>
                        <img loading='lazy'  src={ToysBackground} alt="Toys Background" />
                    </div>
                    <div className={styles.VideoGamesSection}>
                        <p className={styles.GamingParagraph}>Gaming</p>
                        <button className={styles.SectionBtn}>
                            <img src={GamingBtn} alt="Play Icon" />
                        </button>
                        <img loading='lazy'  src={GamingPic} alt="Gaming Background" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Categories