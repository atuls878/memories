import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Input from "../../components/Input.component/Input.component";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Login.styles.scss";
import { useState } from "react";
import Signup from "../Signup.component/Signup.component";

export default function Login() {
  const [loginDeatils, setLoginDeatils] = useState({
    email: "",
    password: "",
  });

  const [isClicked, setIsClicked] = useState(false);
  const [signupClicked, setsignupClicked] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginDeatils((previousValues) => {
      return { ...previousValues, [name]: value };
    });
  }

  function handleClick() {
    if (loginDeatils.password == "" || loginDeatils.email == "")
      setIsClicked(true);
  }
  function showSignup() {
    setsignupClicked(true);
  }

  function removeSignup() {
    setsignupClicked(false);
  }

  return (
    <div className="loginScreen">
      <div id="topLoginScreen">
        <MemoryOutlinedIcon
          sx={{ fontSize: 50 }}
          onClick={removeSignup}
          style={{ cursor: "pointer" }}
        />
        <div style={{ color: "black", cursor: "pointer" }} onClick={showSignup}>
          <h3>CREATE ACCOUNT</h3>
        </div>
      </div>
      {signupClicked && <Signup />}
      <div id="mainLoginScreen">
        <h2>Log into your Memories</h2>
        <form>
          <div className="loginComponents">
            <div className="login">
              <Input
                onChange={handleChange}
                name="email"
                label="Email Address"
                type="email"
                value={loginDeatils.email}
                error={isClicked}
              />
              <Input
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                value={loginDeatils.password}
                error={isClicked}
              />
              <Button
                variant="contained"
                endIcon={<LoginIcon />}
                disabled={false}
                type="submit"
                onClick={handleClick}
              >
                Login
              </Button>
            </div>

            <div id="divider">
              <span className="vl" />
              <span>OR</span>
              <span className="vl" />
            </div>

            <div id="divider2">
              <hr width="100px" />
              <span>OR</span>
              <hr width="100px" />
            </div>

            <div className="login" id="autoLogin">
              <Button variant="outlined" color="inherit" size="large">
                <div>
                  <GoogleIcon />
                  Continue with Google
                </div>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                disabled={true}
              >
                <div>
                  <LinkedInIcon />
                  Continue with LinkedIn
                </div>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                disabled={true}
              >
                <div>
                  <FacebookIcon />
                  Continue with Facebook
                </div>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
