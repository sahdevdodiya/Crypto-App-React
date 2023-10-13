import { Route, Routes } from "react-router-dom";
import Hadder from "./components/Hadder";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">

    <Hadder />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/coins" element={<Coins />}/>
          <Route path="/exchanges" element={<Exchanges />}/>
          <Route path="/coin/:id" element={<CoinDetails />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
