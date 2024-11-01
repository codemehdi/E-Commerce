import styles from './Explore.module.css'
import ExploreItem from './ExploreItem/ExploreItem.jsx'

function Explore(){
    return(
        <>
            <div className={styles.ExploreContainer}>
                <h3 className={styles.ExploreHeading}>Hot Items</h3>
                <div className={styles.ExploreElementsContainer}>
                    <ExploreItem />
                    <ExploreItem />
                    <ExploreItem />
                    <ExploreItem />
                    <ExploreItem />
                    <ExploreItem />
                </div>
            </div>
        </>
    )
}

export default Explore