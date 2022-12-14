import carmen from "./carmen.svg";
import React from "react";
import EngagementCalculator from "./EngagementCalculator";
import "./sass/App.css";

function App() {
  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="My logo" />
        <h3>.React | Sass | Twitter API.</h3>
      </header>
      <main>
        <EngagementCalculator />
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
