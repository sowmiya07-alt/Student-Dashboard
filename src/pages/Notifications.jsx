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
      <div className="loading">
        Loading Notifications...
      </div>
    </div>
  );
}

  return (
    <div className="container">
      <h2 className="title">Notifications</h2>

      {notifications.map((notification) => (
        <div className="card" key={notification.id}>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;