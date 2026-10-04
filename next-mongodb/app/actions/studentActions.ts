"use server"

export async function createStudent(formData: FormData){
    const name = formData.get("name");
    const age = formData.get("age");
    const course = formData.get("course");

    console.log(name,age,course);
}