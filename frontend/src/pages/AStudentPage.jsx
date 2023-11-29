import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const AStudentPage = () => {
    const [student, setStudent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getStudentInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/students/${id}`);
                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching student detail:', error);
            }
        };

        getStudentInfo();
    }, [id]);

    return (
        <div>
            <h1>Student Detail</h1>
            <p>Name: {student.name}</p>
            <p>Student Email: {student.student_email}</p>
            <p>Personal Email: {student.personal_email}</p>
            <p>Locker Number: {student.locker_number}</p>
            <p>Locker Combination: {student.locker_combination}</p>
            <p>Good Student: {student.good_student}</p>


            <h2>Subjects:</h2>
            <ul>
                {student.subjects?.map(subject => (
                    <li key={subject.id}>
                        <Link to={`/subjects/${subject.subject_name}`}>{subject.subject_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
