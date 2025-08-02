using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RetailInventory
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using var context = new AppDbContext();

            Console.WriteLine("--- Writing Queries with LINQ ---");

            // 1. Filter and Sort
            Console.WriteLine("\n1. Products with Price > 1000, sorted by price descending:");
            var filteredProducts = await context.Products
                .Where(p => p.Price > 1000)
                .OrderByDescending(p => p.Price)
                .ToListAsync();

            foreach (var p in filteredProducts)
            {
                Console.WriteLine($"- {p.Name} - Price: {p.Price:C}");
            }

            // 2. Project into DTO (Data Transfer Object)
            Console.WriteLine("\n2. Projecting products into a simpler object (DTO):");
            // Here we only select the Name and Price, ignoring the ID and CategoryId.
            var productDTOs = await context.Products
                .Select(p => new { p.Name, p.Price })
                .ToListAsync();

            foreach (var dto in productDTOs)
            {
                Console.WriteLine($"- Name: {dto.Name}, Price: {dto.Price:C}");
            }
        }
    }
}
