import React from "react";

function Children({ message }) {
  return (
    <div className="child">
      <h3>Child Receiving Message:</h3>
      <p>{message ? message :  "No message yet..."}</p>
    </div>
  );
}

export default Children;
