import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "./FormWrapper";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onSubmit(){
    const data = { username, password };

    fetch("http://127.0.0.1:5000/createAccount", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.ok){
          alert("Successful Account Creation");
        }else {
          alert("Account Creation Failed");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormWrapper title="Login">
          <label>Username</label>
          <input type="text" autoFocus required value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="btnContent">
            <button type="submit" className="btn-custom btn-submit btn-login">
              Login
            </button>
          </div>
        </FormWrapper>
      </form>
    </>
  );
}
