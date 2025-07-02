using System;
using System.Collections.Generic;
using System.Diagnostics;

public class Product
{
    public int ProductId { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }

    public override string ToString()
    {
        return $"ID: {ProductId}, Name: {Name}, Price: ${Price}";
    }
}

class Program
{
    public static Product LinearSearch(List<Product> products, int targetId)
    {
        foreach (var product in products)
        {
            if (product.ProductId == targetId)
            {
                return product;
            }
        }
        return null;
    }

    public static Product BinarySearch(List<Product> sortedProducts, int targetId)
    {
        int left = 0;
        int right = sortedProducts.Count - 1;

        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            Product midProduct = sortedProducts[mid];

            if (midProduct.ProductId == targetId)
            {
                return midProduct;
            }

            if (midProduct.ProductId < targetId)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return null;
    }

    static void Main(string[] args)
    {
        var products = new List<Product>
        {
            new Product { ProductId = 101, Name = "Laptop", Price = 1200.50 },
            new Product { ProductId = 205, Name = "Mouse", Price = 25.00 },
            new Product { ProductId = 310, Name = "Keyboard", Price = 75.75 },
            new Product { ProductId = 452, Name = "Monitor", Price = 300.00 },
            new Product { ProductId = 587, Name = "Webcam", Price = 150.25 },
            new Product { ProductId = 698, Name = "USB Hub", Price = 40.50 }
        };

        int targetProductId = 452;
        Console.WriteLine($"--- Searching for Product with ID: {targetProductId} ---\n");

        Console.WriteLine("1. Testing Linear Search...");
        var stopwatch = Stopwatch.StartNew();
        Product foundProductLinear = LinearSearch(products, targetProductId);
        stopwatch.Stop();

        if (foundProductLinear != null)
        {
            Console.WriteLine($"   Found: {foundProductLinear}");
        }
        else
        {
            Console.WriteLine("   Product not found.");
        }
        Console.WriteLine($"   Time taken: {stopwatch.Elapsed.TotalMilliseconds} ms\n");

        Console.WriteLine("2. Testing Binary Search...");

        products.Sort((p1, p2) => p1.ProductId.CompareTo(p2.ProductId));
        Console.WriteLine("   (List sorted by ProductId before searching)");

        stopwatch.Restart();
        Product foundProductBinary = BinarySearch(products, targetProductId);
        stopwatch.Stop();

        if (foundProductBinary != null)
        {
            Console.WriteLine($"   Found: {foundProductBinary}");
        }
        else
        {
            Console.WriteLine("   Product not found.");
        }
        Console.WriteLine($"   Time taken: {stopwatch.Elapsed.TotalMilliseconds} ms");
    }
}
