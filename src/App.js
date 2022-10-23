import "./App.css";
import Header from "./components/Header/Header";
import JobDetails from "./components/JobDetails/JobDetails";
import JobLists from "./components/Job/JobLists";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />}></Route>
        <Route path="/jobs" element={<JobLists />}></Route>
        <Route path="/jobs/:position" element={<JobDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
