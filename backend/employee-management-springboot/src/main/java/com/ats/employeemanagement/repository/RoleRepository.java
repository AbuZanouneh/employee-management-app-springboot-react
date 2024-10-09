package com.ats.employeemanagement.repository;

import com.ats.employeemanagement.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

// Data Access Layer
public interface RoleRepository extends JpaRepository <Role,Long> {
}
