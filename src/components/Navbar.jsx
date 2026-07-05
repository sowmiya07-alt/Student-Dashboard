import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
       background:"linear-gradient(90deg, #0F172A, #1E3A8A)",
        padding: "10px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Dashboard
      </Link>

      <Link to="/students" style={{ color: "white", textDecoration: "none" }}>
        Students
      </Link>

      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        Profile
      </Link>

      <Link to="/courses" style={{ color: "white", textDecoration: "none" }}>
        Courses
      </Link>

      <Link to="/attendance" style={{ color: "white", textDecoration: "none" }}>
        Attendance
      </Link>

      <Link
        to="/notifications"
        style={{ color: "white", textDecoration: "none" }}
      >
        Notifications
      </Link>
    </nav>
  );
}

export default Navbar;