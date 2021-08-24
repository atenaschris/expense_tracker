import React from "react";

import classes from "./SuccessMessage.module.css";

export const SuccessMessage = (props) => {
  return (
    <div className={classes["error-control"]}>
      <p className="error-centered">Request sent successfully!!</p>
      <button onClick={props.onClosingMessageHandler} >
        x
      </button>
    </div>
  );
};
