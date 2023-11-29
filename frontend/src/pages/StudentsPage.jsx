import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export const StudentsPage = () => {
  //make a list to store the students
  const [studentList, setStudentList] = useState([]);
  // State to store any errors, initialized as null
  const [error, setError] = useState(null);

  // Asynchronous function to fetch all of our students
  const getAllStudents = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/students/"
      );
      setStudentList(response.data);
      console.log(response);
      // If an error occurs, log it and set the error state
    } catch (err) {
      console.error("getAllStudents error", err);
      setError("Something went wrong with getting the students list");
    }
  };

  // useEffect hook to call getAllStudents when the component mounts
  useEffect(() => {
    getAllStudents();
  }, []); // The empty dependency array means this runs only once on mount

  // Asynchronous function to fetch all students
  return (
    <>
      <Row style={{ textAlign: "center", padding: "0 10vmin" }}>
        <p>
          <strong>Students List Page</strong>
          <br />
          These are all of the students.
        </p>
      </Row>

      <div>
        <h1>Student List</h1>
        {error && <p>{error}</p>}
        <ul>
          {studentList.map((student) => (
            <li key={student.id}> <Link to={`/students/${student.id}`}>{student.name}</Link></li>
          ))}
        </ul>
      </div>
    </>
  );
};
