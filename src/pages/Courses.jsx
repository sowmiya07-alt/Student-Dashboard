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
  return (
    <div className="loading">
      Loading Courses...
    </div>
  );
}

  return (
    <div className="container">
      <h2 className="title">Courses</h2>

      {courses.map((course) => (
        <div className="card" key={course.id}>
          <h3>{course.course}</h3>
          <p><strong>Faculty:</strong> {course.faculty}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;