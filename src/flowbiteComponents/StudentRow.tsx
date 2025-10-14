import { TableCell, TableRow } from "flowbite-react";
import type { Student } from "../types/Student";

interface Props {
  student: Student;
  index: number;
  handleClick: (student: Student) => void;
}

export const StudentRow = ({ student, index, handleClick }: Props) => {
  return (
    <TableRow key={index} onClick={() => handleClick(student)}>
      <TableCell>{index}</TableCell>
      <TableCell>{student.studentNo}</TableCell>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.grade}</TableCell>
    </TableRow>
  );
};
