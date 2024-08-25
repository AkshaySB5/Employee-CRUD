import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Employeeservice from '../service/Employeeservice';
const Addemployee = () => {
    const navigate=useNavigate();
    const [employee,setEmployee]=useState({
        id:"",
        name:"",
        mobileno:"",
        mailid:""
    });
    const handleChange =(e)=>{
        const value=e.target.value;
        setEmployee({...employee,[e.target.name]:value})
    }
    const saveEmployee =(e)=>{
        e.preventDefault();
        Employeeservice.saveEmployee(employee)
          .then((response) => {
            console.log("saved",response);
            navigate("/")
          })

          .catch((error) => {
            console.log(error);
          });
    }

    const reset =(e)=>{
        e.preventDefault();
        setEmployee({
        id:"",
        name:"",
        mobileno:"",
        mailid:""
    })}
  return (
    <>
      <div className="max-w-xl mx-40 bg-cyan-700 my-20 rounded shadow px-8 py-4 ">
        <div className="text-3xl tracking-wide font-bold text-center px-4 py-8 text-slate-300">
          <h1>Add Employee</h1>
        </div>
        <div className="mx-10 my-2">
          <input
            value={employee.name}
            onChange={(e) => handleChange(e)}
            className="w-full my-4 py-2 rounded"
            placeholder="Name"
            type="text"
            name="name"
          ></input>
          <input
            value={employee.mobileno}
            onChange={(e) => handleChange(e)}
            className="w-full my-4 py-2 rounded"
            placeholder="Mobileno"
            type="number"
            name="mobileno"
          ></input>
          <input
            value={employee.mailid}
            onChange={(e) => handleChange(e)}
            className="w-full my-4 py-2  rounded"
            placeholder="Mailid"
            type="email"
            name="mailid"
          ></input>
        </div>
        <div className=" flex my-4 px-20 text-slate-300 space-x-3">
          <button onClick={saveEmployee} className="bg-green-600 hover:bg-green-700 py-2 px-6 rounded items-center">
            Save
          </button>
          <button onClick={reset} className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded items-center">
            Clear
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded items-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Addemployee
