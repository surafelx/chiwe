"use client";
import Link from "next/link";
import { Button } from "pixel-retroui";

const HomePage = () => {
  return (
    <div className="main-container flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-8xl  text-center">CHIWE!</h1>
      <p className="main-paragraph">
        Embark on a quest to make new friends! 🏰✨
      </p>

      <div className="main-buttons-container flex flex-col items-center">
        <Link href="/login" className="mb-2 text-blue-500 hover:underline">
          <Button className="w-[200px] rounded-lg">Continue Quest</Button>
        </Link>
        <Link href="/register" className="text-blue-500 hover:underline">
          <Button className="w-[200px]  rounded-lg">Start Your Quest</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
