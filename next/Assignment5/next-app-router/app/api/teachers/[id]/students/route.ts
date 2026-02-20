import { NextResponse } from "next/server";
import data from "../../../../data.json";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  console.log("Route working");

  const params = await context.params;   // 👈 await here
  const teacherId = Number(params.id);

  console.log("Teacher ID:", teacherId);

  const filteredStudents = data.students.filter(
    (student) => student.teacherId === teacherId
  );

  console.log("Filtered:", filteredStudents);

  return NextResponse.json(filteredStudents);
}