import React from "react";

function Parent({ children }) {
  return (
    <div
      style={{
        padding: "1rem",
        outline: "1px solid black",
        margin: "1rem",
        textAlign: "center",
        width: "fit-content",
        margin : "1rem auto"
      }}
    >
      {children}
    </div>
  );
}

export default Parent;
