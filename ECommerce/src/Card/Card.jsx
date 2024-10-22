import styles from './Card.module.css'
import CustomerSupport from '../assets/customerIcon.png'

function Card(){
    return(
        <>
            <div className={styles.CardContainer}>
                <div className={styles.imageCotainer}>
                    <img src={CustomerSupport} alt="Icon" />
                </div>
                <h3 className={styles.Heading}>Satisfied Customers <br /> <span className={styles.HeadingNumber}>+1000</span></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed laboriosam aliquid pariatur sequi, esse quia perspiciatis laborum odit molestiae sapiente?</p>
            </div>
            {/* "Fast Delivery," "Best Prices," "Customer Support" */}
        </>
    )
}

export default Card