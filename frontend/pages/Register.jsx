import React from "react";

function Login() {
  return (
    <>
      <div className="border border-white p-4 m-2 flex flex-col gap-4 max-w-xl">
        <form className="flex flex-col gap-2 text-white">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required
            className="border-solid border active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            className="border-solid border active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            className="border-solid border active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="border-solid border active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Login;
