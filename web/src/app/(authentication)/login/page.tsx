"use client";
import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "@styles/login.scss";
import Link from "next/link";
import ExternalAuth from "@components/ExternalAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="login">
      <div className="login__logo"></div>

      <ExternalAuth />

      <div className="login__separator">
        <span className="login__separator__line1" />
        <p className="login__separator-text">Or sign in with email</p>
        <span className="login__separator__line2" />
      </div>

      <form className="login-form">
        <div className="login-form__input-group">
          <span className="login-form__input-icon">
            <MdOutlineEmail />
          </span>
          <input
            type="email"
            id="email"
            className="login-form__input login-form__input--email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="login-form__input-group">
          <span className="login-form__input-icon">
            <RiLockPasswordFill />
          </span>
          <input
            type="password"
            id="password"
            className="login-form__input login-form__input--password"
            placeholder="Password"
          />
        </div>

        <div className="login-form__forgot">
          <span className="login-form__forgot-text">Forgot password?</span>
        </div>

        <button
          type="button"
          onClick={() => router.push("dashboard")}
          className="login-form__sign-in-btn"
        >
          Sign In
        </button>

        <div className="login-form__sign-up-text">
          Don't have an account?{" "}
          <Link href="/signup" className="login-form__sign-up-text-content">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}