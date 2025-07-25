import "./App.css";
import TextField from "@mui/material/TextField";
import Passoword from "./Passoword";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
function App() {
  return (
    <div className="App">
      <h1>SIGN IN</h1>
      <h3>Please login to continue to your acount</h3>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <Passoword />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Keep me logging in"
      />
      <Button variant="contained" size="large">
        Sign In
      </Button>
    </div>
  );
}

export default App;
