    package com.ats.employeemanagement.entity;

    import com.fasterxml.jackson.annotation.*;
    import jakarta.persistence.*;
    import lombok.*;

    import java.util.List;

    @Entity
    @Table(name="employees")
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    public class Employee {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name= "id")
        private Long employeeId;

        @Column(name ="first_name", length = 50,nullable = false)
        private String firstName;

        @Column(name ="last_name", length = 50,nullable = false)
        private String lastName;

        @Column(name ="email", length = 100,nullable = false, unique = true)
        private String email;

        @ManyToOne(fetch = FetchType.EAGER)
//        @JsonIgnore // Prevent serialization of the department
        @JoinColumn(name ="department_id")
        private Department department;

        @ManyToOne(fetch = FetchType.EAGER)
//        @JsonIgnore // Prevent serialization of the department
        @JoinColumn(name="role_id")
        private Role role;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="manager_id")
        @JsonIgnore
        private Employee manager; // Self-referencing relationship



    }
