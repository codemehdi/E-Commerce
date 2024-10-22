import styles from './Card.module.css'

import {useSpring, animated} from "react-spring"

function Number({ n }) {
    const props = useSpring({
        from: { number: 1 },
        to: { number: n },
        delay: 500,
        config: { mass: 1, tension: 20, friction: 10 }
    });

    return <animated.div className={styles.NumberStat}>
                {props.number.to(val => `+${val.toFixed(0)}`)}
            </animated.div>;
}

function Card({Title, Image, number, altText}){
    return(
        <>
            <div className={styles.CardContainer}>
                <div className={styles.imageCotainer}>
                    <img src={Image} alt={altText} />
                </div>
                <h3 className={styles.Heading}>{Title}</h3>
                <Number n = {number} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed laboriosam aliquid pariatur sequi, esse quia perspiciatis laborum odit molestiae sapiente?</p>
            </div>
            {/* "Fast Delivery," "Best Prices," "Customer Support" */}
        </>
    )
}

export default Card