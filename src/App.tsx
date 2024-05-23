import style from './App.module.css';

import penny from './assets/penny.png';
import nickel from './assets/nickel.png';
import dime from './assets/dime.png';
import quarter from './assets/quarter.png';

function App() {
  return (
    <div className={style.layout}>
      <div className={style.header}>
        <h1 className={style.title}>Dollar To Cents</h1>
      </div>

      <div className={style.main}>
        <div className={style.inputContainer}>
          <span className={style.dollarSign}>$</span>
          <input className={style.input} type="text" placeholder="Dollars..." />
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
            <span className={style.resultCoinCount}>2x</span>
          </div>

          <div className={style.resultCoin}>
            <span>Nickel</span>
            <img
              className={style.resultCoinImage}
              src={nickel}
              alt="Nickel coin"
            />
            <span className={style.resultCoinValue}>$0.05</span>
            <span className={style.resultCoinCount}>2x</span>
          </div>

          <div className={style.resultCoin}>
            <span>Dime</span>
            <img className={style.resultCoinImage} src={dime} alt="Dime coin" />
            <span className={style.resultCoinValue}>$0.10</span>
            <span className={style.resultCoinCount}>2x</span>
          </div>

          <div className={style.resultCoin}>
            <span>Quarter</span>
            <img
              className={style.resultCoinImage}
              src={quarter}
              alt="Quarter coin"
            />
            <span className={style.resultCoinValue}>$0.25</span>
            <span className={style.resultCoinCount}>2x</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
