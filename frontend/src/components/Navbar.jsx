import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Badge } from "react-bootstrap";
import { useDispatchCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../pages/Cart";

function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  let data = useDispatchCart().state;

  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <img
            src="https://web-champions-reimagine-round1.vercel.app/assests/images/Nike_logo-removebg-preview.png"
            alt=""
            className={styles.navImg}
          />
        </div>
        <div className={styles.navbar2}>
          {localStorage.getItem("authToken") ? (
            <ul className={styles.navOpt}>
              <li>
                <Link to="/" className={styles.opt}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.opt}>
                  About Us
                </Link>
              </li>
              
              <li>
                <Link
                  aria-current="page"
                  to="/"
                  className={styles.opt}
                  onClick={() => setCartView(true)}
                >
                  My Cart{" "}
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                  {cartView && (
                    <Modal onClose={() => setCartView(false)}>
                      <Cart />
                    </Modal>
                  )}
                </Link>
              </li>
              <li>
                <div className={styles.opt} onClick={handleLogout}>
                  Logout
                </div>
              </li>
            </ul>
          ) : (
            <div>
              <ul className={styles.navOpt}>
                <li>
                  <Link to="/" className={styles.opt}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className={styles.opt}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className={styles.opt} to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className={styles.opt} to="/signup">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
