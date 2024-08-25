package com.employee.employee;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@CrossOrigin("http://localhost:3000/")
@RestController
public class Empcontroller {
 //EmplService employeeservice = new EmplServiceImpl();
 @Autowired
 EmplService employeeservice ;//Dependency injection
    @GetMapping("emp")
    public List<Employee> getemployees() {
        return employeeservice.getEmployees();
    }

    @PostMapping("emp")
    public String postMethodName(@RequestBody Employee employee) {
        return employeeservice.creatEmployee(employee);

    }

    @DeleteMapping("emp/{id}")
    public String deleteemployee(@PathVariable Long id)
    {
         if(employeeservice.deleteEmployee(id)==true)
         {
            return "Deleted successfully";
         }
         else return "Not found";
    }

@PutMapping("emp/{id}")
public String updateEmploye(@PathVariable Long id, @RequestBody Employee emp) {

    return employeeservice.updateEmployee(id,emp);
}

}
