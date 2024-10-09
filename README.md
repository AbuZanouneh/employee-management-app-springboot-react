# employee-management-app-springboot-react
A simple Employee Management application implementing CRUD operations to demonstrate how to integrate a React frontend with a Spring Boot backend.

# Prerequisites
Before running the application, ensure you have the following installed:

-- Java Development Kit (JDK) 8 or higher

-- Node.js and npm (Node Package Manager)

-- Apache Maven (for building the project)

-- Git (optional, for cloning the repository)

# Database Setup
To set up the database, you must first create it using the provided SQL file:

Locate the employee_management_db.sql file in the project folder.
Run the SQL script in your database management system to create the necessary tables and data.


# Getting Started

## Backend 
1. Clone the Repository
   If you haven't cloned the repository yet, open your terminal and run:
   
   ``` bash
       git clone https://github.com/AbuZanouneh/employee-management-springboot.git


2. Navigate to the Project Directory

   ``` bash
       git clone https://github.com/AbuZanouneh/employee-management-springboot.git
   
3. Add or replace the following lines in the src/main/resources/application.properties file with your MySQL credentials:

    ``` java
        # MySQL Database Configuration
        spring.application.name=employee-management
        spring.datasource.url=jdbc:mysql://localhost:3306/employee_management?useSSL=false&serverTimezone=UTC
        spring.datasource.username=your_mysql_username
        spring.datasource.password=your_mysql_password
        # spring.jpa.hibernate.ddl-auto=update
        spring.jpa.show-sql=true

4. Running the Application

* Build the Project
   
    ``` bash
        mvn clean install

* Run the Application

    ``` bash
        mvn spring-boot:run

* Accessing the Application

Once the application is running, you can access it at:
-- URL: http://localhost:8080

## Frontend

1. Navigate to the Frontend Directory

   ``` bash
       cd employee-management-app-springboot-react/frontend
2. Start the React Application
   
    ``` bash
        npm start
3. Accessing the Application
   This command starts the development server and opens the app in your default browser at:
   -- URL: http://localhost:3000


   
