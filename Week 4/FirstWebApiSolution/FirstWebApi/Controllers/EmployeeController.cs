using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using FirstWebApi.Filters;

namespace FirstWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [CustomAuthFilter] // Temporarily commented out to make testing easier
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> _employees = new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "John Doe",
                Salary = 60000,
                Permanent = true,
                Skills = new List<string> { "C#", "SQL", ".NET" },
                DateOfBirth = new DateTime(1990, 5, 15)
            },
            new Employee
            {
                Id = 2,
                Name = "Jane Smith",
                Salary = 75000,
                Permanent = true,
                Skills = new List<string> { "JavaScript", "React", "CSS" },
                DateOfBirth = new DateTime(1992, 8, 22)
            }
        };

        private List<Employee> GetStandardEmployeeList()
        {
            return _employees;
        }

        // GET: api/Employee
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Employee>))]
        [ProducesResponseType(500)]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            // throw new Exception("This is a test exception!");
            var employees = GetStandardEmployeeList();
            return Ok(employees);
        }

        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee updatedEmployee)
        {
            // Validation 1: Check if the id is valid
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            // Find the existing employee in our list
            var employee = _employees.FirstOrDefault(e => e.Id == id);

            // Validation 2: Check if the employee was found
            if (employee == null)
            {
                return BadRequest("Invalid employee id");
            }

            // Update the employee's properties with the new data
            employee.Name = updatedEmployee.Name;
            employee.Salary = updatedEmployee.Salary;
            employee.Permanent = updatedEmployee.Permanent;
            employee.Skills = updatedEmployee.Skills;
            employee.DateOfBirth = updatedEmployee.DateOfBirth;

            // Return the updated employee
            return Ok(employee);
        }
    }
}
