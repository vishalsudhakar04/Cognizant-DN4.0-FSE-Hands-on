CREATE DATABASE OnlineRetailDB;
GO

USE OnlineRetailDB;
GO

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(100)
);
GO

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID),
    Price DECIMAL(10, 2)
);
GO

INSERT INTO Categories (CategoryID, CategoryName) VALUES
(1, 'Electronics'),
(2, 'Books'),
(3, 'Clothing');
GO

INSERT INTO Products (ProductID, ProductName, CategoryID, Price) VALUES
(101, '4K TV', 1, 1500.00),
(102, 'Laptop', 1, 1200.00),
(103, 'Gaming Console', 1, 500.00),
(104, 'Soundbar', 1, 500.00),
(105, 'Smartphone', 1, 950.00),
(201, 'SQL Deep Dive', 2, 55.00),
(202, 'C# In-Depth', 2, 60.00),
(203, 'Data Structures Intro', 2, 45.00),
(204, 'Cloud Computing Basics', 2, 60.00),
(205, 'The Art of Unit Testing', 2, 50.00),
(301, 'Leather Jacket', 3, 350.00),
(302, 'Denim Jeans', 3, 90.00),
(303, 'Winter Scarf', 3, 40.00),
(304, 'Designer T-Shirt', 3, 90.00),
(305, 'Running Shoes', 3, 120.00);
GO

SELECT
    CategoryName,
    ProductName,
    Price,
    ROW_NUMBER() OVER(PARTITION BY c.CategoryName ORDER BY p.Price DESC) AS RowNum,
    RANK()       OVER(PARTITION BY c.CategoryName ORDER BY p.Price DESC) AS RankNum,
    DENSE_RANK() OVER(PARTITION BY c.CategoryName ORDER BY p.Price DESC) AS DenseRankNum
FROM
    Products p
JOIN
    Categories c ON p.CategoryID = c.CategoryID;
GO
