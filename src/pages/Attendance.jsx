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
      <h2 className="title">Attendance</h2>

      {attendance.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.subject}</h3>
          <p><strong>Attendance:</strong> {item.percentage}</p>
        </div>
      ))}
    </div>
  );
}

export default Attendance;