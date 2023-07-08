import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ id, value }) => {
    console.log(id, ': ', value)
    if(id == "username") {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <main>
      <form>
        <input id="username" type='text' value={username} onChange={(e) => handleChange(e.target)}/>
        <label for="username">username</label>

        <input id="password" type='password' onChange={(e) => handleChange(e.target)}/>
        <label for="password" value={password} >password</label>
        <button>login</button>
      </form>
    </main>
  );
}

export default Login;