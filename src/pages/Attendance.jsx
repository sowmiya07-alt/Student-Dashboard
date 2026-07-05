import { useEffect, useState } from "react";
import API from "../services/api";
import attendanceData from "../mockData/attendance";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await API.get("/attendance");

      setTimeout(() => {
        setAttendance(response.data);
        setLoading(false);
      }, 500);

    } catch (error) {
      console.log("API Failed. Loading Mock Attendance...");

      setTimeout(() => {
        setAttendance(attendanceData);
        setLoading(false);
      }, 500);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        Loading Attendance...
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">📅 Attendance</h1>
      <p className="subtitle">Attendance Overview</p>

      <div className="dashboard-grid">
        {attendance.map((item, index) => (
          <div className="card" key={index}>

            <div className="icon">📅</div>

            <h2>{item.subject}</h2>

            <div className="number">
              {item.percentage}
            </div>

            <span>Current Attendance</span>

            <div className="progress">
              <div style={{ width: item.percentage }}></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;