import type { Student } from "../types/Student";

interface Props {
  student: Student;
  index: number;
  handleClick: (student: Student) => void;
}

export const StudentRow = ({ student, index, handleClick }: Props) => {
  return (
    <tr className="border-t" key={index} onClick={() => handleClick(student)}>
      <td className="py-2 px-4 text-center">{index}</td>
      <td className="py-2 px-4 text-center">{student.studentNo}</td>
      <td className="py-2 px-4 text-center">{student.name}</td>
      <td className="py-2 px-4 text-center">{student.grade}</td>
    </tr>
  );
};
