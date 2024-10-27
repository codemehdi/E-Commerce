import styles from './LineTitle.module.css'

function LineTitle(){
    return(
        <>
            <div className={styles.TitleContainer}>
                <div className={styles.paragraphContainer}>
                    <p>
                        Hot Items
                    </p>
                </div>
            </div>
        </>
    )
}

export default LineTitle