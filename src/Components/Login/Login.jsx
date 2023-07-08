import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [incomplete, setIncomplete] = useState(false)
  const [badInfo, setBadInfo] = useState(false)

  const handleChange = ({ id, value }) => {
    console.log(id, ': ', value)
    if(id == "username") {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const handleSubmit = () => {
    if(!username || !password) {
      setIncomplete(true)
    } else {
      setIncomplete(false)
    }
    //api call to check user info
      //if it exists, set state in app
      //if naw, setBadInfo
  }

  return (
    <main>
      <form>
        <input id="username" type='text' value={username} onChange={(e) => handleChange(e.target)}/>
        <label for="username">username</label>

        <input id="password" type='password' onChange={(e) => handleChange(e.target)}/>
        <label for="password" value={password} >password</label>
        <button onClick={handleSubmit}>login</button>
        {badInfo && <p>username or password is incorrect</p>}
        {incomplete && <p>please a valid username and password to login</p>}
      </form>
    </main>
  );
}

export default Login;