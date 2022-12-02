import "./sass/App.css";
import React from "react";
import { useState } from "react";
const needle = require("needle");
const params = { max_results: 10 };
const bearerToken =
  "AAAAAAAAAAAAAAAAAAAAAE7rjwEAAAAA1jorw8P4y418vzTxTMSm8wCL32s%3DwzkENk7Zb2KmDvm8fJ2xh28X752VsudeuR9k41p8w7CnW1aYKl";
const options = {
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  },
};

export default function EngagementCalculator() {
  let [username, setUsername] = useState("elonmusk");

  function getUserTweets() {
    let url = `https://api.twitter.com/2/users/${username}/tweets`;

    const response = async () =>
      (await needle("get", url, params, options))
        .then((response) => {
          return response.text();
        })
        .catch((error) => console.log(error));
    console.log(response);
  }

  return (
    <div className="flex">
      <span>
        <h3>Please enter the Twitter username (without @)</h3>
        <br />
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={getUserTweets}> SEARCH </button>
        <br />
      </span>
    </div>
  );
}
