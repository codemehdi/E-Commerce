import styles from './Seller.module.css'
import SellerPic from '../assets/sellerBackground.webp'
import ArrowIcon from '../assets/ArrowIcon.png'


function Seller(){
    return(
        <>
            <section className={styles.SellerSection}>
                <div className={styles.SellerText}>
                    <h3 className={styles.SellerHeader}>Want to become a Seller?</h3>
                    <p className={styles.SellerParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat rerum consectetur qui, libero voluptas, explicabo ipsum fuga cum perferendis similique iste impedit odit nihil assumenda iure consequuntur, amet sit. Autem quis odit distinctio aperiam ex consequuntur reprehenderit iste error. Beatae recusandae, quos nam deserunt nesciunt quaerat doloribus ipsa cupiditate excepturi.</p>
                    <button className={styles.SellerBtn}>
                        <img src={ArrowIcon} alt="Arrow Icon" />
                        Apply Now
                    </button>
                </div>
                <div className={styles.SellerPicFrame}>
                    <frame>
                        <img src={SellerPic} alt="Selling Image" />
                    </frame>
                </div>
            </section>
        </>
    )
}

export default Seller