import React from "react";
import styles from "./modal.module.css";
const Modal = ({ show, details, onClose }) => {
  return (
    <>
      {show ? (
        <div className={styles.modalWrapper}>
          <div className={styles.modalItem}>
            <div className={styles.row}>
              <div className={styles.title}>
                {details.title.substring(0, 22)}
              </div>
              <div className={styles.price}>price: {details.price}</div>
            </div>
            <div>
              <img src={details.image} alt={details.alt} />
            </div>

            <div className={styles}>
              description: {details.description.substring(0, 40)}
            </div>
            <button className={styles.button} onClick={onClose}>
              close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
