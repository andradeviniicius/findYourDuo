import React from "react";
import "@styles/external-auth.scss";
import { FaDiscord, FaGoogle, FaTwitch } from "react-icons/fa";
import { SiRiotgames } from "react-icons/si";

function ExternalAuth() {
  return (
    <div className="external_auth">
      <button
        className={`external_auth-btn external_auth-btn--discord`}
        aria-label={`Login with Discord`}
        type="button"
      >
        <FaDiscord />
      </button>
      <button
        className={`external_auth-btn external_auth-btn--google`}
        aria-label={`Login with Google`}
        type="button"
      >
        <FaGoogle />
      </button>
      <button
        className={`external_auth-btn external_auth-btn--twitch`}
        aria-label={`Login with Twitch`}
        type="button"
      >
        <FaTwitch />
      </button>
      <button
        className={`external_auth-btn external_auth-btn--riot`}
        aria-label={`Login with Riot`}
        type="button"
      >
        <SiRiotgames />
      </button>
    </div>
  );
}

export default ExternalAuth;
