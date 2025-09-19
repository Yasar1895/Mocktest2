import React, { useState, useEffect } from "react";

const StudentForm = ({ addStudent, updateStudent, editingStudent }) => {
  const [student, setStudent] = useState({ name: "", grade: "", course: "" });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }
    setStudent({ name: "", grade: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <input
        name="grade"
        placeholder="Grade"
        value={student.grade}
        onChange={handleChange}
        required
      />
      <input
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingStudent ? "Update" : "Add"} Student</button>
    </form>
  );
};

export default StudentForm;
