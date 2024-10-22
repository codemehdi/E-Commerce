import Card from '../Card/Card.jsx'
import styles from './Cards.module.css'

function Cards(){
    return(
        <>
            <div className={styles.CardsContainer}>
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Cards