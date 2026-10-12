import { data } from "@/app/data/data";
import { NextResponse } from "next/server";

// 200 — Student fetched successfully
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const student = data.find(
    (student) => student.id === Number(id)
  );

  // 404 — Student doesn't exist
  if (!student) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  // 200 — Student found
  return NextResponse.json({
    student:student, 
  },
{
    status:200
}
);
}

