import React from "react";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div>
      <li>
        <Link to={props.link}>{props.title}</Link>
      </li>
    </div>
  );
};

export default Item;
