USE EmployeeDB;
GO

CREATE FUNCTION fn_CalculateAnnualSalary
(
    @MonthlySalary DECIMAL(10, 2)
)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    RETURN @MonthlySalary * 12;
END;
GO

SELECT 
    FirstName,
    LastName,
    Salary,
    dbo.fn_CalculateAnnualSalary(Salary) AS AnnualSalary
FROM 
    Employees
WHERE 
    EmployeeID = 1;
GO
