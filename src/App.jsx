import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import StartButton from "./components/StartButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="text-white">
        <Header />
        <StartButton />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
