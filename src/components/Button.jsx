import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className={`f5 f4-ns dim br1 ba bw2 dib`}>
      <Link className="link dim" to={props.toWhere} style={props.styles}>
        {props.displayText}
      </Link>
    </div>
  );
};

export default Button;
