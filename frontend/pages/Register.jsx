import React from "react";

function Login() {
  return (
    <>
      <div>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <br />
          <br />

          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
          <br />

          <label>Password:</label>
          <input type="password" name="password" required />
          <br />
          <br />

          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" required />
          <br />
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Login;
