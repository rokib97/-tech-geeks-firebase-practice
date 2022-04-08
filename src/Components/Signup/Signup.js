import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { auth } from "../../Firebase/firebase.init";

const provider = new GoogleAuthProvider();
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    /* const email = event.target.email.value;
    const password = event.target.password.value; */
    // const passwordConfirm = event.target.confirmPassword.value;
    if (password !== passwordConfirmation) {
      console.log("password mismatch");
    }
    if (email && password && password === passwordConfirmation) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  };
  const handleEmail = (event) => {
    const emailInput = event.target.value;
    console.log(emailInput);
    setEmail(emailInput);
  };
  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    console.log(passwordInput);
    setPassword(passwordInput);
  };
  const handleConfirmPassword = (event) => {
    const confirmPasswordInput = event.target.value;
    console.log(confirmPasswordInput);
    setPasswordConfirmation(confirmPasswordInput);
  };
  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                onBlur={(event) => handleEmail(event)}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                onBlur={handlePassword}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                onBlur={handleConfirmPassword}
                type="password"
                name="confirmPassword"
                id="confirm-password"
              />
            </div>
          </div>
          <button type="submit" className="auth-form-submit">
            Sign Up
          </button>
        </form>
        <p className="redirect">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <div className="input-wrapper">
          <button onClick={googleAuth} className="google-auth">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
