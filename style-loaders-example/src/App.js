import logo from './logo.svg';
// import './App.css';
// import './App.scss';
import styles from './App.module.css';
import Button from './components/Button';

/* console.log(styles);
// {
//   App: "App_App__3zca-" // [filename]\_[classname]\_\_[hash]
//   App - header: "App_App-header__k5BDR"
//   App - link: "App_App-link__4yn5I"
//   App - logo: "App_App-logo__ehmMB"
// } */

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles["header"]}>
        <img src={logo} className={styles['logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div >
  );
}

export default App;
