import { NextResponse } from "next/server";
// 201 — Student created
// 400 — Invalid data
export async function POST(request: Request) {
  const body = await request.json();

  // 400 — Name is required
  if (!body.name || !body.age || !body.course) {
    return NextResponse.json(
      { message: "Name, age and course are required" },
      { status: 400 }
    );
  }

  // 201 — Successfully created
  return NextResponse.json(
    {
      message: "Student created successfully",
      student: body,
    },
    {
      status: 201,
    }
  );
}


// 500 — Server error
export async function DELETE() {
  try {

    // Simulating a server/database error
    throw new Error("Database connection failed");

  } catch (error) {

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );

  }
}