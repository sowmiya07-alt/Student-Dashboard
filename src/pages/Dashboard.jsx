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
    <div className="loading">
      Loading Dashboard...
    </div>
  );
}
  return (
    <div className="container">
      <h2 className="title">Dashboard</h2>

      <div className="card">
        <h3>Total Students</h3>
        <p>{dashboard.totalStudents}</p>
      </div>

      <div className="card">
        <h3>Total Courses</h3>
        <p>{dashboard.totalCourses}</p>
      </div>

      <div className="card">
        <h3>Attendance</h3>
        <p>{dashboard.attendance}</p>
      </div>
    </div>
  );
}

export default Dashboard;