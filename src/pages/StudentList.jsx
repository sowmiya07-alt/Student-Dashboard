import { useState } from "react";
import students from "../mockData/students";

function StudentList() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1 className="title">👨‍🎓 Student List</h1>
      <p className="subtitle">
        Total Students : {filteredStudents.length}
      </p>

      <input
        type="text"
        placeholder="🔍 Search Student..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.year}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default StudentList;