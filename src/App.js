import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./styles.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (student) => {
    setStudents(
      students.map((s) => (s.id === student.id ? student : s))
    );
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div>
      <h1>Student Record Management</h1>
      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
      />
      <StudentList
        students={students}
        editStudent={editStudent}
        deleteStudent={(index) => deleteStudent(students[index].id)}
      />
    </div>
  );
}

export default App;
