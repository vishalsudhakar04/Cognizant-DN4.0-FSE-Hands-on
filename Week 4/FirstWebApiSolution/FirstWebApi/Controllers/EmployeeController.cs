using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using FirstWebApi.Filters;
namespace FirstWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        // This is our in-memory "database" of employees for this exercise.
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

        // This is a private helper method as requested by the exercise.
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
            throw new Exception("This is a test exception!");

            // The old code is now unreachable, which is fine for this test.
            // var employees = GetStandardEmployeeList();
            // return Ok(employees);
        }
    }
}
