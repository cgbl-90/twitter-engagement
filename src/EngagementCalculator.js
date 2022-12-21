import "./sass/App.css";
import React from "react";
import { useState } from "react";

export default function EngagementCalculator() {
  // Twitter
  const bearerToken =
    "Bearer AAAAAAAAAAAAAAAAAAAAAE7rjwEAAAAA1jorw8P4y418vzTxTMSm8wCL32s%3DwzkENk7Zb2KmDvm8fJ2xh28X752VsudeuR9k41p8w7CnW1aYKl";
  const params = { max_results: 10 };
  const web_name = "https://api.twitter.com/";
  let headers = {
    authorization: `Bearer ${bearerToken}`,
    "x-guest-token": { guestCode },
  };

  // Props
  let [username, setUsername] = useState("elonmusk");
  let [guestCode, setGuestCode] = useState(" ");

  // Fns
  function updateGuessToken() {
    let url = `{web_name}1.1/guest/activate.json`;
    /// REQUEST
    setGuestCode(); // set reply as Guest token
  }

  function getUserTweets() {
    let url = `{web_name}2/users/${username}/tweets`;
    /// REQUEST
  }
  if (guestCode === " ") updateGuessToken;
  else return (
    <div className="flex">
      <span>
        <h3>Please enter the Twitter username (without @)</h3>
        <br />
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={updateGuessToken}> SEARCH </button>
        <br />
      </span>
    </div>
  );
}

// "
