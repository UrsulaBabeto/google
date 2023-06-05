import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-style">
      <Header className="header" />
      <Main />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
