package com.employee.employee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmplServiceImpl implements EmplService {
    @Autowired
    EmployeeRepository employeeRepository;
    List<Employee> employees = new ArrayList<>();
    @Override
    public List<Employee> getEmployees() {
         List<EmployeeEntity> employeeList = employeeRepository.findAll();
         List<Employee> employee=new ArrayList<>();

         for(EmployeeEntity employeeEntity: employeeList)
         {
            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setMobileno(employeeEntity.getMobileno());
            emp.setMailid(employeeEntity.getMailid());
            employee.add(emp);
         }
         return employee;

    }

    @Override
    public String creatEmployee(Employee employee) {

        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        return "Saved successfully";
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee emp) {
       EmployeeEntity empl=employeeRepository.findById(id).get();
      
       empl.setName(emp.getName());
       empl.setMobileno(emp.getMobileno());
       empl.setMailid(emp.getMailid());
       employeeRepository.save(empl);
       return "Updated successfully";

}
}
