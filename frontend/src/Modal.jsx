import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className={styles.modalbackdrop} onClick={onClose}></div>
      <div className={styles.modalcontent} onClick={onClose}>
        <Link to="/" style={{
          color:"black",
          fontSize:"1.5rem"
        }}>X</Link>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
