import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export const SubjectsPage = () => {
  //make a list to store the subjects
  const [subjectList, setSubjectList] = useState([]);
  // State to store any errors, initialized as null
  const [error, setError] = useState(null);

  // Asynchronous function to fetch all of our subjects
  const getAllSubjects = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/subjects/"
      );
      setSubjectList(response.data);
      console.log(response);
      // If an error occurs, log it and set the error state
    } catch (err) {
      console.error("getAllSubjects error", err);
      setError("Something went wrong with getting the subjects");
    }
  };

  // useEffect hook to call getAllSubjects when the component mounts
  useEffect(() => {
    getAllSubjects();
  }, []); // The empty dependency array means this runs only once on mount

  // Asynchronous function to fetch all subjects
  return (
    <>
      <Row style={{ textAlign: "center", padding: "0 10vmin" }}>
        <p>
          <strong>Subjects Page</strong>
          <br />
          These are the school subjects.
        </p>
      </Row>

      <div>
        <h1>Subject List</h1>
        {error && <p>{error}</p>}
        <ul>
          {subjectList.map((subject) => (
            <li key={subject.id}> <Link to={`/subjects/${subject.subject_name}`}>{subject.subject_name}</Link><p>Subject ID: {subject.id}</p></li>
          ))}
        </ul>
      </div>
    </>
  );
};
