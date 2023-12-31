import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { getCall } from '../../api'

function Login({ setUser}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [badInfo, setBadInfo] = useState(false)

  const checkUser = async() => {
    const users = await getCall('users')
    const login = await users.users.find(user => user.id.toString() === username)
    //if it exists, set state in app
    if(!login) {
      setBadInfo(true)
    } else {
      console.log(login)
      setBadInfo(false)
      setUser(login)
      navigate("/dashboard")
    }
  }

  const handleChange = ({ id, value }) => {
    if(id == "username") {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username && password === 'password') {
      checkUser()
    } else {
      setBadInfo(true)
    }
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