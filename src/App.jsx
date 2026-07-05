import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Sidebar";

import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import StudentProfile from "./pages/StudentProfile";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Notifications from "./pages/Notifications";
import ProfileDetails from "./pages/ProfileDetails";

import "./App.css";
import "./styles/Sidebar.css";
import "./styles/MainContents.css";

function App() {
  return (
    
      <div className="app">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;