import React from "react";
import { Link } from "react-router";

function Login() {
  return (
    <>
      <div className="border border-white p-4 m-2 flex flex-col gap-4 max-w-xl">
        <form className="flex flex-col gap-2 text-white">
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

          <button
            type="submit"
            className="box-border border cursor-pointer active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
          >
            Login
          </button>
        </form>
        <div className="text-center texttext-white">
          no account?{" "}
          <Link to="/register" className="underline">
            <span className="">register</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
