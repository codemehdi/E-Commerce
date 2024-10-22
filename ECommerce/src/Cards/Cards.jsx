import Card from '../Card/Card.jsx'
import styles from './Cards.module.css'
import CustomerSupport from '../assets/customerIcon.png'
import DelieveryIcon from '../assets/DelieveryIcon.png'
import PriceIcon from '../assets/PriceIcon.png'

function Cards(){
    return(
        <>
            <div className={styles.CardsContainer}>
                <Card 
                    Title= "Customer Support"
                    Image= {CustomerSupport}
                    altText = "CustomerSupport Icon"
                    number = {2000}
                />
                <Card 
                    Title= "Dicsounted Items"
                    Image= {PriceIcon}
                    altText = "Discount Icon"
                    number = {50}
                />
                <Card 
                    Title= "Delieverd Items"
                    Image= {DelieveryIcon}
                    altText = "Delievery Icon"
                    number = {30000}
                />
            </div>
        </>
    )
}

export default Cards