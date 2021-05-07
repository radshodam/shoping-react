import React from "react";
import List from "../list/List";
import Store from "../storeShoping/Store";
import styles from "./main.module.css";
const Main = () => {
  return (
    <>
     <Store />
    <main className={styles.main}>
      <List />
    </main>
    </>
  );
};

export default Main;
