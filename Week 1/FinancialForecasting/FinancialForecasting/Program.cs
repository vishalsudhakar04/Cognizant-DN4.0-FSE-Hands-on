using System;

class Program
{
    public static double CalculateFutureValue(double currentValue, double growthRate, int years)
    {
        if (years == 0)
        {
            return currentValue;
        }

        double nextYearValue = currentValue * (1 + growthRate);

        return CalculateFutureValue(nextYearValue, growthRate, years - 1);
    }

    static void Main(string[] args)
    {
        double initialInvestment = 1000.00;
        double annualGrowthRate = 0.05;
        int numberOfYears = 10;

        Console.WriteLine("--- Financial Forecasting Tool ---");
        Console.WriteLine($"Initial Investment: ${initialInvestment:F2}");
        Console.WriteLine($"Annual Growth Rate: {annualGrowthRate:P1}");
        Console.WriteLine($"Forecast Period: {numberOfYears} years\n");

        double futureValue = CalculateFutureValue(initialInvestment, annualGrowthRate, numberOfYears);

        Console.WriteLine($"Predicted Future Value after {numberOfYears} years: ${futureValue:F2}");
    }
}
