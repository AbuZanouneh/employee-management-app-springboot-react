package com.ats.employeemanagement.repository;

import com.ats.employeemanagement.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

// Data Access Layer
public interface DepartmentRepository extends JpaRepository<Department,Long> {
}
