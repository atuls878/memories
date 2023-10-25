import "../Login.component/Login.styles.scss";
import Input from "../../components/Input.component/Input.component";
import Button from "@mui/material/Button";
import StraightIcon from "@mui/icons-material/Straight";
import "./Signup.styles.scss";

export default function Signup() {
  return (
    <form>
      <div id="signupComponent">
        <div className="login">
          <Input id="text" label="Full Name" type="text" />
          <Input id="email" label="Email Address" type="email" />
          <Input id="password" label="Password" type="password" />
          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
          />
          <Button
            variant="contained"
            endIcon={<StraightIcon />}
            disabled={false}
            type="submit"
          >
            Signup
          </Button>
        </div>
      </div>
    </form>
  );
}
