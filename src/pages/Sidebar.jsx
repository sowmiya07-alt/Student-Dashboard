import { Link } from "react-router-dom";

function Sidebar(){
  return(
    <div className="sidebar">

      <div className="logo">
        🎓 Student Dashboard
      </div>

      <div className="menu">
        <Link to="/">🏠 Dashboard</Link>
        <Link to="/students">👨‍🎓 Students</Link>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/courses">📚 Courses</Link>
        <Link to="/attendance">📅 Attendance</Link>
        <Link to="/notifications">🔔 Notifications</Link>
      </div>

    </div>
  );
}

export default Sidebar;