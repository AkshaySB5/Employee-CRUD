import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex px-3 py-3 h-16 bg-cyan-800 items-center">
        <h1 className="text-3xl font-bold text-slate-300">
          👔EMPLOYEE MANAGEMENT
        </h1>
        <div className="space-x-4 ml-auto">
          <a
            className="font-semibold text-slate-300 hover:text-slate-700"
            href="/"
          >
            Home
          </a>
          <a
            className="font-semibold text-slate-300 hover:text-slate-700"
            href="/"
          >
            Contact
          </a>
          <a
            className="font-semibold text-slate-300 hover:text-slate-700"
            href="/"
          >
            Logout
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar
