import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ size, type, className, children, id, onClick }) {
  return (
    <button onClick={onClick} id={id} className={["btn",`btn-${size}`, `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;