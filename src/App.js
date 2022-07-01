import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';
import CompletedTask from './Pages/CompletedTask';
import Calender from './Pages/Calender';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Navber/>
      <Routes className="App lg:mx-14">
        <Route path="/" element={<Home />} />
        <Route path="/completedTask" element={<CompletedTask />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
