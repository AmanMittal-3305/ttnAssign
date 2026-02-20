import { NextResponse } from "next/server";

let teachers = [
  { id: 1, name: "Teacher 1" },
  { id: 2, name: "Teacher 2" },
  { id: 3, name: "Teacher 3" },
  { id: 4, name: "Teacher 4" },
  { id: 5, name: "Teacher 5" },
];

let students = [
  { id: 1, name: "Student 1", teacherId: 1 },
  { id: 2, name: "Student 2", teacherId: 1 },
  { id: 3, name: "Student 3", teacherId: 2 },
  { id: 4, name: "Student 4", teacherId: 2 },
  { id: 5, name: "Student 5", teacherId: 3 },
  { id: 6, name: "Student 6", teacherId: 3 },
  { id: 7, name: "Student 7", teacherId: 4 },
  { id: 8, name: "Student 8", teacherId: 4 },
  { id: 9, name: "Student 9", teacherId: 5 },
  { id: 10, name: "Student 10", teacherId: 5 },
  { id: 11, name: "Student 11", teacherId: 1 },
  { id: 12, name: "Student 12", teacherId: 2 },
  { id: 13, name: "Student 13", teacherId: 3 },
  { id: 14, name: "Student 14", teacherId: 4 },
  { id: 15, name: "Student 15", teacherId: 5 },
  { id: 16, name: "Student 16", teacherId: 1 },
  { id: 17, name: "Student 17", teacherId: 2 },
  { id: 18, name: "Student 18", teacherId: 3 },
  { id: 19, name: "Student 19", teacherId: 4 },
  { id: 20, name: "Student 20", teacherId: 5 },
  { id: 21, name: "Student 21", teacherId: 1 },
  { id: 22, name: "Student 22", teacherId: 2 },
  { id: 23, name: "Student 23", teacherId: 3 },
  { id: 24, name: "Student 24", teacherId: 4 },
  { id: 25, name: "Student 25", teacherId: 5 },
  { id: 26, name: "Student 26", teacherId: 1 },
  { id: 27, name: "Student 27", teacherId: 2 },
  { id: 28, name: "Student 28", teacherId: 3 },
  { id: 29, name: "Student 29", teacherId: 4 },
  { id: 30, name: "Student 30", teacherId: 5 }
];

export async function GET() {
  return NextResponse.json({
    teachers,
    students,
  });
}

