import "./App.css";
import Homepage from "./pages/homePage";
import ChatPage from "./pages/chatPage";
import { Route, Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

//import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chats" element={<ChatPage/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;