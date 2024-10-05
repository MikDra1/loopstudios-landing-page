import { useState } from "react";
import styles from "./Navigation.module.css";
import { useLoop } from "../contexts/LoopProvider";
// import Button from "./Button";
// import Button from "./Button";

function Navigation() {
  const { isMobile } = useLoop();
  const [imageUrl, setImageUrl] = useState("./images/icon-hamburger.svg");
  const isOpen = imageUrl === "./images/icon-close.svg";

  function handleOpenNav() {
    setImageUrl((url) =>
      url === "./images/icon-hamburger.svg"
        ? "./images/icon-close.svg"
        : "./images/icon-hamburger.svg"
    );
  }

  return (
    <>
      {isMobile ? (
        <header className={`${styles.headerMobile} ${isOpen ? styles.positionFixed : ''}`}>
          <img src="./images/logo.svg" alt="" />
          <img src={imageUrl} alt="" onClick={handleOpenNav} />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <div className={styles.headerMobileUlContainer}>
            <div>about</div>
            <div>careers</div>
            <div>events</div>
            <div>products</div>
            <div>support</div>
            </div>
            
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <img src="./images/logo.svg" alt="" />
          <div className={styles.headerDesktopEnd}>
            <ul>
            <li>about</li>
            <li>careers</li>
            <li>events</li>
            <li>products</li>
            <li>support</li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
