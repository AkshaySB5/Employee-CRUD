package com.employee.employee;

import java.util.List;

public interface EmplService {
    List<Employee> getEmployees();
    String creatEmployee(Employee employee);
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id,Employee emp);

}
