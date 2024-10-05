import styles from './Intro.module.css'

function Intro() {
    return (
        <div className={styles.intro}>
            <img srcSet="./images/mobile/image-interactive.jpg 600w,
            ./images/desktop/image-interactive.jpg 1920w" alt="" />
            <div className={styles.introContent}>
            <h2>the leader in interactive vr</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
    )
}

export default Intro
