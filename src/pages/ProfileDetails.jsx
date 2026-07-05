import { useParams } from "react-router-dom";
import profile from "../mockData/profile";

function ProfileDetails() {
  const { id } = useParams();

  const student = profile.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="container">
      <h1 className="title">Student Profile</h1>

      <div className="card">
        <h2>{student.name}</h2>

        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
    </div>
  );
}

export default ProfileDetails;