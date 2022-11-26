import React from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full h-32 bg-gray-300 flex items-center justify-end space-x-4 px-4">
        <h1 className="mr-auto text-2xl font-light">
          E commerce web app with Next.js
        </h1>
        <div className="">
          <button className="px-4 py-2 p-4 text-lg bg-black hover:text-black hover:bg-white border text-white rounded">
            Sign up
          </button>
        </div>
        <div className="">
          <button className="px-4 py-2 p-4 text-lg bg-black hover:text-black hover:bg-white border text-white rounded">
            Login
          </button>
        </div>
        <div className="">
          <button
            className="px-4 py-2 p-4 text-lg bg-black hover:text-black hover:bg-white border text-white rounded"
            onClick={() => router.push("/admin")}
          >
            Admin
          </button>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
