/* eslint-disable react/prop-types */
import styles from './Creation.module.css'

function Creation({title, image, imageDesk, specialClass}) {
    return (
        <div className={styles.creation}>
            <h3 className={`${specialClass}`}>{title}</h3>
            <img srcSet={`${image} 960w,
            ${imageDesk} 1920w`} alt="" />
        </div>
    )
}

export default Creation
