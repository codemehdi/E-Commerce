import styles from './ExploreItem.module.css'
import ItemPic from '../../assets/controllerPic.png'

function ExploreItem(){
    return(
        <>
            <div className={styles.ExploreItemContainer}>
                <div className={styles.ExploreImageContainer}>
                    <img src={ItemPic} alt="Item Image" />
                </div>
                <div className={styles.ExploreItemDetails}>
                    <h3 className={styles.ExploreItemName}>Test</h3>
                    <h3 className={styles.ExploreItemCategory}>Category</h3>
                    <p className={styles.ExploreItemPrice}>10.99 $</p>
                </div>
            </div>        
        </>
    )
}

export default ExploreItem