import { useEffect, useState } from "react";
import API from "../services/api";
import coursesData from "../mockData/courses";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await API.get("/courses");

      setTimeout(() => {
        setCourses(response.data);
        setLoading(false);
      }, 500);

    } catch (error) {
      console.log("API Failed. Loading Mock Courses...");

      setTimeout(() => {
        setCourses(coursesData);
        setLoading(false);
      }, 500);
    }
  };

  if (loading) {
    return <div className="loading">Loading Courses...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">📚 Courses</h1>
      <p className="subtitle">Available Courses Overview</p>

      <div className="dashboard-grid">
        {courses.map((course) => (
          <div className="card" key={course.id}>

            <div className="icon">📘</div>

            <h2>{course.course}</h2>

            <div className="number">
              {course.students || 40}
            </div>

            <span>
              Faculty : {course.faculty}
            </span>

            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;