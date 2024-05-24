import style from './App.module.css';

import penny from './assets/penny.png';
import nickel from './assets/nickel.png';
import dime from './assets/dime.png';
import quarter from './assets/quarter.png';
import { useState } from 'react';

function App() {
  const [coins, setCoins] = useState({
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0,
  });

  const handleDollarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dollarValue = Number(event.target.value);

    if (isNaN(dollarValue)) return;

    let balance = Math.round(dollarValue * 100);
    const quarter = Math.floor(balance / 25);
    balance %= 25;
    const dime = Math.floor(balance / 10);
    balance %= 10;
    const nickel = Math.floor(((balance % 25) % 10) / 5);
    balance %= 5;
    const penny = Math.floor(((balance % 25) % 10) % 5);

    setCoins({ quarter, dime, nickel, penny });
  };

  return (
    <div className={style.layout}>
      <div className={style.header}>
        <h1 className={style.title}>Dollar To Cents</h1>
      </div>

      <div className={style.main}>
        <div className={style.inputContainer}>
          <span className={style.dollarSign}>$</span>
          <input
            className={style.input}
            type="text"
            placeholder="Dollars..."
            onInput={handleDollarInput}
          />
        </div>

        <div className={style.result}>
          <div className={style.resultCoin}>
            <span>Penny</span>
            <img
              className={style.resultCoinImage}
              src={penny}
              alt="Penny coin"
            />
            <span className={style.resultCoinValue}>$0.01</span>
            <span className={style.resultCoinCount}>{coins.penny}x</span>
          </div>

          <div className={style.resultCoin}>
            <span>Nickel</span>
            <img
              className={style.resultCoinImage}
              src={nickel}
              alt="Nickel coin"
            />
            <span className={style.resultCoinValue}>$0.05</span>
            <span className={style.resultCoinCount}>{coins.nickel}x</span>
          </div>

          <div className={style.resultCoin}>
            <span>Dime</span>
            <img className={style.resultCoinImage} src={dime} alt="Dime coin" />
            <span className={style.resultCoinValue}>$0.10</span>
            <span className={style.resultCoinCount}>{coins.dime}x</span>
          </div>

          <div className={style.resultCoin}>
            <span>Quarter</span>
            <img
              className={style.resultCoinImage}
              src={quarter}
              alt="Quarter coin"
            />
            <span className={style.resultCoinValue}>$0.25</span>
            <span className={style.resultCoinCount}>{coins.quarter}x</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
