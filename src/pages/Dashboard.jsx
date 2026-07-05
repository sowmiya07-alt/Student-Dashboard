import { useEffect, useState } from "react";
import API from "../services/api";
import dashboardData from "../mockData/dashboard";

function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await API.get("/dashboard");

      setTimeout(() => {
        setDashboard(response.data);
        setLoading(false);
      }, 500);

    } catch (error) {
      console.log("API Failed. Loading Mock Dashboard...");

      setTimeout(() => {
        setDashboard(dashboardData);
        setLoading(false);
      }, 500);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="container">

      <h1 className="title">👋 Welcome Back</h1>
      <p className="subtitle">
        Student Dashboard Overview
      </p>

      <div className="dashboard-grid">

        <div className="card">
          <div className="icon">👨‍🎓</div>
          <h2>Total Students</h2>
          <div className="number">{dashboard.totalStudents}</div>
          <span>Registered Students</span>
          <div className="progress">
            <div style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="card">
          <div className="icon">📚</div>
          <h2>Total Courses</h2>
          <div className="number">{dashboard.totalCourses}</div>
          <span>Courses Available</span>
          <div className="progress">
            <div style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="card">
          <div className="icon">📅</div>
          <h2>Attendance</h2>
          <div className="number">{dashboard.attendance}</div>
          <span>Current Attendance</span>
          <div className="progress">
            <div style={{ width: dashboard.attendance }}></div>
          </div>
        </div>

        <div className="card">
          <div className="icon">🔔</div>
          <h2>Notifications</h2>
          <div className="number">5</div>
          <span>Unread Notifications</span>
          <div className="progress">
            <div style={{ width: "55%" }}></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;