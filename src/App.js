import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';
import CompletedTask from './Pages/CompletedTask';
import Calender from './Pages/Calender';

function App() {
  return (
    <div className="App lg:mx-14">
      <Navber/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completedTask" element={<CompletedTask />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
