import { NextResponse } from "next/server";
import data from "../../data.json";

let teachers = [...data.teachers];

export async function GET() {
  return NextResponse.json(teachers);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTeacher = {
    id: teachers.length + 1,
    name: body.name,
    subject: body.subject,
  };

  teachers.push(newTeacher);

  return NextResponse.json(newTeacher, { status: 201 });
}