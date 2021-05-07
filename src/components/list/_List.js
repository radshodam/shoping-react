import React from "react";
import loader from "../../images/loader.gif";
import Modal from "../modal/Modal";
import styles from "./list.module.css";
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      show: false,
      details: {},
      
    };

    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          productList: result,
        });
      });
  }

  handleShow = (item) => {
    this.setState({ show: true });
    this.setState({details: item });
  };
  render() {
    return (
      <>
        <ul className={styles.cards}>
          {this.state.productList.length > 0 ? (
            this.state.productList.map((item) => {
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
                      onClick={() => this.handleShow(item)}
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
        <Modal show={this.state.show} details={this.state.details} />
      </>
    );
  }
}
export default List;
