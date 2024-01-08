import './app.css'
import Navbar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import MainPage from "./components/MainPage/mainPage"

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="rightContainer">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
