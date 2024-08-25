import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Employeeservice from '../service/Employeeservice';
const Employeelist = () => {
   const[loading,setLoading]=useState(true);
   const [employees,setEmployees]=useState(null);

   useEffect(()=>{

      const fetchData= async()=>{
        setLoading(true);
         try{
             const response= await Employeeservice.getEmployees();
             setEmployees(response.data);

         }
         catch(error){
              console.log(error);
         }
         setLoading(false);
      };
     fetchData();
   },[]);


    const navigate = useNavigate();
  return (
    <>
      <div className="container mx-20 my-8">
        <div>
          <button
            onClick={() => navigate("/add")}
            className="bg-cyan-700 font-bold hover:bg-cyan-900 text-slate-300 mx-20 my-10 items-center px-2 py-2 rounded"
          >
            Add Employee
          </button>
        </div>
        <div>
          <table className="shadow rounded">
            <thead className="bg-cyan-700 text-slate-300 ">
              <th className="px-6 py-3 tracking-wide text-slate-300">Name</th>
              <th className="px-6 py-3 tracking-wide text-slate-300">
                Mobileno
              </th>
              <th className="px-6 py-3 tracking-wide text-slate-300">Mailid</th>
            
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <tr className="hover:bg-cyan-200 ">
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.mobileno}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.mailid}
                    </td>

                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default Employeelist
