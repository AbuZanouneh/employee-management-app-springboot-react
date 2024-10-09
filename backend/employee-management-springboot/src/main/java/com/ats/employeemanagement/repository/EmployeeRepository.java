package com.ats.employeemanagement.repository;

import com.ats.employeemanagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// Data Access Layer
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    // Custom query to find employees by department ID
    List<Employee> findByDepartmentDepartmentId(Long departmentId);

    // Custom query to find employees by role ID
    List<Employee> findByRoleRoleId(Long roleId);
}
