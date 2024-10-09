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

# Technologies Used
  * Backend:
    - Spring Boot
    - Spring Data JPA
    - MySQL (or any other relational database)
    - Maven
      
  * Frontend:
    - React
    - Axios
    - React Router
    - Bootstrap (optional, for styling)
   
   * Others:
     - Git
     - Node.js
   
# Troubleshooting

  * Backend Port Already in Use:
    If port 8080 is occupied, change the server port in application.properties:

    ``` properties
        server.port=8081

  * Database Connection Issues:

     * Ensure MySQL is running.
     * Verify database credentials in application.properties.
     * Check if the database employee_db exists. If not, create it:

    ``` properties
        CREATE DATABASE employee_db;

 * Frontend Not Connecting to Backend:

    * Ensure the backend server is running.
    * Verify the API base URL in the frontend configuration.
    * Check for CORS issues and configure CORS in the backend if necessary.
      
 * Dependency Issues:

    * For Maven: Run mvn clean install to resolve dependencies.
    * For npm: Run npm install to install missing packages.
      
 * Environment Variables Not Loading:

    * Ensure .env files are correctly placed in the frontend directory.
    * Restart the development server after adding or modifying .env files. 




   
