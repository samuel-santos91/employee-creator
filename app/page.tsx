import Link from "next/link";
import { Anek_Malayalam } from "next/font/google";

const openSans = Anek_Malayalam({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header className={openSans.className}>
        <div className="m-auto relative top-56 w-10/12 p-6 rounded-full bg-gray-50 border-solid border-2 border-gray-200">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Employee Management
          </h1>
        </div>
      </header>

      <div className="m-auto text-center relative top-72 p-5 w-40 bg-blue-700 text-white font-bold rounded-md">
        <Link href="/employees">GET STARTED</Link>
      </div>
    </>
  );
}
