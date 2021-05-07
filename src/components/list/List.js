import React, { useState, useEffect } from "react";
import loader from "../../images/loader.gif";
import { eng } from "../../resources/Resources";
import Modal from "../modal/Modal";
import styles from "./list.module.css";
const List = () => {
  const [productList, setProductList] = useState([]);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProductList(result);
      });
  }, []);

  const handleShow = (item) => {
    setShow(true);
    setDetails(item);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <>
        <h3 className={styles.text_head}>{eng.product}</h3>
        <ul className={styles.cards}>
          {productList.length > 0 ? (
            productList.map((item) => {
              return (
                <li key={item.id} className={styles.itemcards}>
                  <div className={styles.cardsTitle}>
                    {item.title.substring(0, 11)}
                  </div>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.bottomCards}>
                    <div className={styles.cardsPrice}> price:{item.price}</div>
                    <button
                      type="button"
                      className={styles.cardsBtn}
                      onClick={() => handleShow(item)}
                    >
                      Description
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <div className={styles.loader}>
              <img src={loader} alt="loader" className={styles.imgLoader} />
            </div>
          )}
        </ul>
        <Modal show={show} details={details} onClose={handleClose} />
      </>
    </div>
  );
};

export default List;
