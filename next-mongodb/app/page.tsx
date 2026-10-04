import Image from "next/image";
import Student from "./components/Student";
import Product from "./components/Product";
export default function Home() {
  return (
    <div>
      <h1>Student</h1>
      <Student/>
      <h1>Product</h1>
      <Product/>
    </div>
  );
}
