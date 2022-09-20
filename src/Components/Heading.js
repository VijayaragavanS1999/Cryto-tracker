import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="container">
      <div className="coin-row">
        <div className="coin">
          <span className="head_rank">Rank</span>
          <span className="head-coin">Coin</span>
          <span className="head-logo">Logo</span>
          <span className="head-symbol">Symbol</span>
          <span className="head-price">Price</span>
          <span className="head-volume">Volume</span>
          <span className="head-change">24hr change</span>
          <span className="head-marketCap">MarketCap</span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
