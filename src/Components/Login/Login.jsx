import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [badInfo, setBadInfo] = useState(false)

  const handleChange = ({ id, value }) => {
    if(id == "username") {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    if(username || password) {
      checkUser()
    } else {
      setBadInfo(true)
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
        <button onClick={(e) => handleSubmit(e)}>login</button>
        {badInfo && <p>username or password is incorrect</p>}
      </form>
    </main>
  );
}

export default Login;