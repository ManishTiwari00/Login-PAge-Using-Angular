import React from "react";
import { Link } from "react-router-dom";

const AllStudents = () => {
  
  const students = [
    { id: 1, name: "Siddheshwar Tiwari", email: "siddheshwar.tiwari@example.com", username: "siddhumoosewala" },
    { id: 2, name: "Aisha Sharma", email: "aisha.sharma@example.com", username: "aisha_sharma" },
    { id: 3, name: "Aryan Singh", email: "aryan.singh@example.com", username: "aryan_singh" },
    { id: 4, name: "Ishaan Kumar", email: "ishaan.kumar@example.com", username: "ishaan_kumar" },
    { id: 5, name: "Ananya Gupta", email: "ananya.gupta@example.com", username: "ananya_gupta" },
    { id: 6, name: "Advait Verma", email: "advait.verma@example.com", username: "advait_verma" },
    { id: 7, name: "Aaliyah Reddy", email: "aaliyah.reddy@example.com", username: "aaliyah_reddy" },
    { id: 8, name: "Arjun Kapoor", email: "arjun.kapoor@example.com", username: "arjun_kapoor" },
    { id: 9, name: "Aarav Patel", email: "aarav.patel@example.com", username: "aarav_patel" },
    // Add more student details as needed
  ];

  return (
    <div>
      <h1 className="text-4xl text-white font-bold text-center mb-6">All Students</h1>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <table className="w-full text-white border border-black">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Username</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t border-black">
                <td className="p-2">{student.id}</td>
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2">{student.username}</td>
                <td className="p-2">
                  <Link to={`/student/${student.id}`} className="underline hover:text-yellow-500">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
