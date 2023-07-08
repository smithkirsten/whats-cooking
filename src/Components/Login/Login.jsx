import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main>
      <section>
        <input id="username" type='text' />
        <label for="username">username</label>

        <input id="password" type='password' />
        <label for="password">password</label>
      </section>
    </main>
  );
}

export default Login;