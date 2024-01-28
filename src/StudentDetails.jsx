import React from "react";
import { Link } from "react-router-dom";

const StudentDetail = ({ match }) => {
  const students = [
    { id: 1, name: "Amit Kumar", email: "amit.kumar@example.com", username: "amit_kumar" },
    { id: 2, name: "Priya Singh", email: "priya.singh@example.com", username: "priya_singh" },
    { id: 3, name: "Rahul Sharma", email: "rahul.sharma@example.com", username: "rahul_sharma" },
  ];

  const student = students.find(s => s.id.toString() === match.params.id);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h1 className="text-4xl text-white font-bold text-center mb-6">Student Details</h1>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h2 className="text-2xl text-white font-bold mb-4">{student.name}</h2>
        <div className="mb-4">
          <p className="text-white">Email: {student.email}</p>
          <p className="text-white">Username: {student.username}</p>
        </div>
        <Link to="/all-students" className="text-white underline hover:text-yellow-500">
          Back to All Students
        </Link>
      </div>
    </div>
  );
};

export default StudentDetail;
