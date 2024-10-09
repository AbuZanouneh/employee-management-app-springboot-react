package com.ats.employeemanagement.controller;

import com.ats.employeemanagement.entity.Department;
import com.ats.employeemanagement.entity.Employee;
import com.ats.employeemanagement.repository.DepartmentRepository;
import com.ats.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    // Retrieve all departments.
    @GetMapping
    public List<Department> getAllDepartments()
    {return departmentRepository.findAll();}

    // Create a new department.
    @PostMapping
    public Department createDepartment(@RequestBody Department department){
        return departmentRepository.save(department);
    }


    // Retrieve an department by Id.
    @GetMapping("/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable("id") Long departmentId){
        return departmentRepository.findById(departmentId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete an department by Id.
    @DeleteMapping("/{id}")
    public ResponseEntity<Department> deleteDepartment(@PathVariable("id")  Long departmentId){
        if(departmentRepository.existsById(departmentId))
        {
            departmentRepository.deleteById(departmentId);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Update department by Id.
    @PutMapping("/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable("id") Long departmentId,
                                                       @RequestBody Department departmentDetails){
        return departmentRepository.findById(departmentId)
                .map(department ->{
            department.setDepartmentName(departmentDetails.getDepartmentName());
            return ResponseEntity.ok(departmentRepository.save(department));

        }).orElse(ResponseEntity.notFound().build());
    }

    // Get all employees in a department
    @GetMapping("/{id}/employees")
    public ResponseEntity<List<Employee>> getEmployeesByDepartmentId(@PathVariable("id") Long departmentId) {
        if (!departmentRepository.existsById(departmentId)) {
            return ResponseEntity.notFound().build();
        }
        List<Employee> employees = employeeRepository.findByDepartmentDepartmentId(departmentId);
        return ResponseEntity.ok(employees);
    }

}
