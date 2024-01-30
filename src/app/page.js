import Image from "next/image";
import { Calculator } from "./components/page";


export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-teal-950 text-gray-50" style={{border:'red solid 2px'}}>
      <Calculator />
    </main>
  );
}
