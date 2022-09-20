import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  rank,
}) => {
  return (
    <div className="container">
      <div className="coin-row">
        <div className="coin">
          <h1 className="rank">{rank}</h1>
          <img src={image} alt="crypto" />

          <h1 className="name">{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="data">
          <p className="price">${price}</p>
          <p className="volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="marketcap">${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
