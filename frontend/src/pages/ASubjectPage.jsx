import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const ASubjectPage = () => {
    const [subject, setSubject] = useState({});
    const { subject_name } = useParams();

    useEffect(() => {
        const getSubjectInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/subjects/${subject_name}`);
                setSubject(response.data);
            } catch (error) {
                console.error('Error fetching subject detail:', error);
            }
        };

        getSubjectInfo();
    }, [subject_name]);

    return (
        <div>
            <h1>Subject Detail</h1>
            <p>Name: {subject.subject_name}</p>
            <p>Professor: {subject.professor}</p>
        </div>
    );
};
