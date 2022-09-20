import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Components/Coin";
import Heading from "./Components/Heading";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title">My Crypto Tracker</h1>
      <div className="search">
        <h1 className="text">Search a currency</h1>
        <form>
          <input
            className="input"
            type="text"
            onChange={handleChange}
            placeholder="Search a coin ..."
          />
        </form>
      </div>
      <Heading />
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            rank={coin.market_cap_rank}
          />
        );
      })}
    </div>
  );
}

export default App;
