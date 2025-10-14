import type { Student } from "../types/Student";
import { StudentRow } from "./StudentRow";

const StudentTable = () => {
  const students: Student[] = [
    { studentNo: "123124123", name: "Andrew", grade: 65 },
    { studentNo: "12432123", name: "Maria", grade: 87 },
    { studentNo: "12432123", name: "Maria", grade: 87 },
    { studentNo: "12432123", name: "Maria", grade: 87 },
    { studentNo: "12432123", name: "Maria", grade: 87 },
    { studentNo: "12432123", name: "Maria", grade: 87 },
  ];

  function handleClick(student: Student) {
    console.log(student);
  }

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center min-h-screen">
        <div className="w-3/4 max-w-4xl">
          <table className="w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-center">Order</th>
                <th className="py-2 px-4 text-center">Student No</th>
                <th className="py-2 px-4 text-center">Name</th>
                <th className="py-2 px-4 text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <StudentRow
                  key={index}
                  student={item}
                  index={index}
                  handleClick={handleClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
