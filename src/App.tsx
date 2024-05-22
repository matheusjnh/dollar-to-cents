import style from './App.module.css';

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
      </div>
    </div>
  );
}

export default App;
