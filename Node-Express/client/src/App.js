import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import EditPost from "./components/EditPost";
import AddPost from "./components/AddPost";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/addpost" element={<AddPost />} />
        <Route exact path="/editpost" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
