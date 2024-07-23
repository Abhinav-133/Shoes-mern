import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#333",
    color: "white",
    cursor: "pointer",
  },
  loginPrompt: {
    marginTop: "10px",
    textAlign: "center",
  },
  loginButton: {
    background: "none",
    border: "none",
    color: "#333",
    textDecoration: "underline",
    cursor: "pointer",
  },
  main: {
    backgroundImage:
      'url("https://web-champions-reimagine-round1.vercel.app/assests/images/nike%20green%20shoe.jpg")',
    width: "100vw",
    height: "100vh",
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // display: 'flex',
    alignItems: "center",
    // justifyContent: 'flex-start',
    paddingLeft: "5%",
    paddingTop: "10%",
  },
};

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_URL}/api/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      toast("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("currentUserEmail", credentials.email);
      navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <h2>Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              style={styles.input}
              onChange={onChange}
              value={credentials.email}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              style={styles.input}
              onChange={onChange}
              value={credentials.password}
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
          <p style={styles.loginPrompt}>
            New User?{" "}
            <button style={styles.loginButton}>
              <Link to="/signup" style={{ color: "black" }}>
                SignUp
              </Link>
            </button>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
