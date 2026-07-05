import { Link } from "react-router-dom";
import profile from "../mockData/profile";

function StudentProfile() {
  return (
    <div className="container">
      <h1 className="title">Student Profiles</h1>
      <p className="subtitle">Student Information</p>

      {profile.map((student) => (
        <div className="profile-card" key={student.id}>

          <div className="profile-left">
            <div className="profile-avatar">👤</div>
          </div>

          <div className="profile-center">
            <h2>{student.name}</h2>

            <p><strong>ID :</strong> {student.id}</p>
            <p><strong>Department :</strong> {student.department}</p>
            <p><strong>Year :</strong> {student.year}</p>
            <p><strong>Email :</strong> {student.email}</p>
          </div>

          <div className="profile-right">
           <Link to={`/profile/${student.id}`} className="view-btn">
  View Profile
</Link>
          </div>

        </div>
      ))}
    </div>
  );
}

export default StudentProfile;