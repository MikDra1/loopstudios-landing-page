import Creation from "./Creation";
import styles from "./Creations.module.css";

function Creations() {
  return (
    <div className={styles.creations}>
      <div className={styles.creationsHeading}>
      <h2>our creations</h2>
      <button className="btn btn--desktop">see all</button>
      </div>
      <div className={styles.creationsContent}>
      <Creation
        title="deep earth"
        image="./images/mobile/image-deep-earth.jpg"
        imageDesk="./images/desktop/image-deep-earth.jpg"
      />
      <Creation
        title="night arcade"
        image="./images/mobile/image-night-arcade.jpg"
        imageDesk="./images/desktop/image-night-arcade.jpg"
      />
      <Creation
        title="soccer team vr"
        image="./images/mobile/image-soccer-team.jpg"
        imageDesk="./images/desktop/image-soccer-team.jpg"
      />
      <Creation
        title="the grid"
        image="./images/mobile/image-grid.jpg"
        imageDesk="./images/desktop/image-grid.jpg"
        specialClass="customCreationClass"
      />
      <Creation
        title="from up above vr"
        image="./images/mobile/image-from-above.jpg"
        imageDesk="./images/desktop/image-from-above.jpg"
      />
      <Creation
        title="pocket borealis"
        image="./images/mobile/image-pocket-borealis.jpg"
        imageDesk="./images/desktop/image-pocket-borealis.jpg"
      />
      <Creation
        title="the curiosity"
        image="./images/mobile/image-curiosity.jpg"
        imageDesk="./images/desktop/image-curiosity.jpg"
      />
      <Creation
        title="make it fisheye"
        image="./images/mobile/image-fisheye.jpg"
        imageDesk="./images/desktop/image-fisheye.jpg"
      />
      </div>
      <button className="btn btn--mobile">See all</button>
    </div>
  );
}

export default Creations;
