import mongoose,{ Schema } from "mongoose";

const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    }
})

const Student = mongoose.models.Student || mongoose.model("Student",studentSchema)

export default Student;
