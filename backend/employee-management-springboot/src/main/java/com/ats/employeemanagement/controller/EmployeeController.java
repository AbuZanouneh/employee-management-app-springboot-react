package com.ats.employeemanagement.controller;

import com.ats.employeemanagement.entity.Department;
import com.ats.employeemanagement.entity.Employee;
import com.ats.employeemanagement.entity.Role;
import com.ats.employeemanagement.repository.DepartmentRepository;
import com.ats.employeemanagement.repository.EmployeeRepository;
import com.ats.employeemanagement.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/employees")
@CrossOrigin(origins = "http://localhost:3000")  // Adjust this to match your React app's URL
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private RoleRepository roleRepository;

    // Retrieve all employees.
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // Create a new employee.
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // Retrieve an employee by Id.
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long employeeId) {
        return employeeRepository.findById(employeeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete an employee by Id.
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable("id") Long employeeId){
        if(employeeRepository.existsById(employeeId)){
            employeeRepository.deleteById(employeeId);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Update employee by Id.
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long employeeId,
                                                   @RequestBody Employee employeeDetails) {
        return employeeRepository.findById(employeeId).map(employee -> {
            employee.setFirstName(employeeDetails.getFirstName());
            employee.setLastName(employeeDetails.getLastName());
            employee.setEmail(employeeDetails.getEmail());
            employee.setDepartment(employeeDetails.getDepartment());
            employee.setRole(employeeDetails.getRole());
            employee.setManager(employeeDetails.getManager());
            return ResponseEntity.ok(employeeRepository.save(employee));
        }).orElse(ResponseEntity.notFound().build());
    }


}
