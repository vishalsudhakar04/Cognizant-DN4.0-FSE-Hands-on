USE EmployeeDB;
GO

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DeptID INT
AS
BEGIN
    SELECT 
        COUNT(EmployeeID) AS NumberOfEmployees
    FROM 
        Employees
    WHERE 
        DepartmentID = @DeptID;
END;
GO

EXEC sp_GetEmployeeCountByDepartment @DeptID = 3;
GO
