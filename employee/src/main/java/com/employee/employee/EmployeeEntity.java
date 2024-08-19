// EmployeeEntity is only to communicate with the database
package com.employee.employee;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="emp_db")
@Entity
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//to make id as primary key
    private Long id;

    private String name;
    private String mobileno;
    private String mailid;

}
