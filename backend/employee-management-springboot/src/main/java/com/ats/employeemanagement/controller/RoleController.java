package com.ats.employeemanagement.controller;


import com.ats.employeemanagement.entity.Employee;
import com.ats.employeemanagement.entity.Role;
import com.ats.employeemanagement.repository.EmployeeRepository;
import com.ats.employeemanagement.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    // Retrieve all Roles.
    @GetMapping
    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }

    // Create a new role.
    @PostMapping
    public Role createRole(@RequestBody Role role){
        return roleRepository.save(role);
    }

    // Retrieve role by Id.
    @GetMapping("/{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable("id")  Long roleId) {
        return roleRepository.findById(roleId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete role by Id.
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRole(@PathVariable("id")  Long roleId){
        if(roleRepository.existsById(roleId)){
            roleRepository.deleteById(roleId);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Update role by Id.
    @PutMapping("/{id}")
    public ResponseEntity<Role> updateRole(@PathVariable("id")  Long roleId,
                                                   @RequestBody Role roleDetails) {
        return roleRepository.findById(roleId).map(role -> {
            role.setRoleName(roleDetails.getRoleName());
            return ResponseEntity.ok(roleRepository.save(role));
        }).orElse(ResponseEntity.notFound().build());
    }

    // Get all employees By role ID.
    // Get all employees with a specific role
    @GetMapping("/{id}/employees")
    public ResponseEntity<List<Employee>> getEmployeesByRoleId(@PathVariable("id") Long roleId) {
        if (!roleRepository.existsById(roleId)) {
            return ResponseEntity.notFound().build();
        }
        List<Employee> employees = employeeRepository.findByRoleRoleId(roleId);
        return ResponseEntity.ok(employees);
    }
}
