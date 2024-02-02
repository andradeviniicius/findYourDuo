import ExternalAuth from "@components/ExternalAuth";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";

import "@styles/signup.scss";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signup__logo"></div>

      <ExternalAuth />

      <div className="signup__separator">
        <span className="signup__separator__line1" />
        <p className="signup__separator-text">Or sign up with email</p>
        <span className="signup__separator__line2" />
      </div>

      <form className="signup-form">
        <div className="signup-form__input-group">
          <span className="signup-form__input-icon">
            <MdOutlineEmail />
          </span>
          <input
            type="email"
            id="email"
            className="signup-form__input signup-form__input--email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="signup-form__input-group">
          <span className="signup-form__input-icon">
            <RiLockPasswordLine />
          </span>
          <input
            type="password"
            id="password"
            className="signup-form__input signup-form__input--password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="signup-form__input-group">
          <span className="signup-form__input-icon">
            <RiLockPasswordFill />
          </span>
          <input
            type="password"
            id="password"
            className="signup-form__input signup-form__input--password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="signup-form__sign-in-btn">
          Sign Up
        </button>

        <div className="signup-form__sign-up-text">
          Already registered?{" "}
          <Link href="/login" className="signup-form__sign-up-text-content">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
