import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
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
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Order</TableHeadCell>
                <TableHeadCell>Student No</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Grade</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((item, index) => (
                <StudentRow
                  key={index}
                  student={item}
                  index={index}
                  handleClick={handleClick}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
