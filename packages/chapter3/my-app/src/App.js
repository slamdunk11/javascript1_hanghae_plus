import logo from "./logo.svg";
import "./App.css";
import MetaTag from "./MetaTag";

function App() {
  return (
    <div className="App">
      <MetaTag
        props={{
          description: "키워드는 리액트이다.",
          keywords: "리액트",
          title: "렌의 리액트",
        }}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
