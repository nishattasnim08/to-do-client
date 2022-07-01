import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';
import CompletedTask from './Pages/CompletedTask';
import Calender from './Pages/Calender';
import Footer from './Pages/Shared/Footer/Footer';
import ToDoTaskList from './Pages/ToDoTaskList/ToDoTaskList';
import EditToDo from './Pages/ToDoTaskList/EditToDo';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes className="lg:mx-14">
        <Route path="/" element={<Home />} />
        <Route path="/completedTask" element={<CompletedTask />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/toDoTaskList" element={<ToDoTaskList />} />
        <Route path="/editToDo/:id" element={<EditToDo />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
