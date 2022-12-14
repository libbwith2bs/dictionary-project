import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="word" />
        </main>
        <footer className=" App-footer text-center">
          Open source{" "}
          <a
            href="https://github.com/libbwith2bs/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by Elizabeth Tutewiler
        </footer>
      </div>
    </div>
  );
}

export default App;
