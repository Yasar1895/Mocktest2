import React from "react";

const StudentList = ({ students, editStudent, deleteStudent }) => {
  return (
    <ul>
      {students.map((s, index) => (
        <li key={index}>
          {s.name} - {s.grade} - {s.course}
          <button onClick={() => editStudent(s)}>Edit</button>
          <button onClick={() => deleteStudent(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
