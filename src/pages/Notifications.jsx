import { useEffect, useState } from "react";
import API from "../services/api";
import notificationsData from "../mockData/notifications";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await API.get("/notifications");

      setTimeout(() => {
        setNotifications(response.data);
        setLoading(false);
      }, 500);

    } catch (error) {
      console.log("API Failed. Loading Mock Notifications...");

      setTimeout(() => {
        setNotifications(notificationsData);
        setLoading(false);
      }, 500);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading">Loading Notifications...</p>
      </div>
    );
  }

  return (
    <div className="container">

      <h1 className="title">🔔 Notifications</h1>
      <p className="subtitle">
        Latest Updates & Announcements
      </p>

      <div className="dashboard-grid">

        {notifications.map((notification) => (
          <div className="card" key={notification.id}>

            <div className="icon">🔔</div>

            <h2>Notification</h2>

            <span>{notification.message}</span>

            <div className="progress">
              <div style={{ width: "100%" }}></div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Notifications;