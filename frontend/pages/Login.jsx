import React from "react";

function Login() {
  return (
    <>
      <div>
        <form>
          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
          <br />

          <label>Password:</label>
          <input type="password" name="password" required />
          <br />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
