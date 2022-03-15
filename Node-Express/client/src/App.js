import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/editpost" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
