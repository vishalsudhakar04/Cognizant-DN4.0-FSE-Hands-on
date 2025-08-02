using CalcLibrary; // Use the code from our Calculator project
using NUnit.Framework; // Use the NUnit framework

namespace CalculatorTests
{
    [TestFixture] // Marks this class as a container for tests
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp] // This method runs BEFORE each test
        public void Setup()
        {
            // Create a new Calculator instance for each test to ensure they are isolated
            _calculator = new Calculator();
        }

        [TestCase(5, 10, 15)]  // Test case 1: 5 + 10 should equal 15
        [TestCase(-1, 1, 0)]   // Test case 2: -1 + 1 should equal 0
        [TestCase(-5, -5, -10)] // Test case 3: -5 + -5 should equal -10
        [TestCase(0, 0, 0)]    // Test case 4: 0 + 0 should equal 0
        public void Add_WhenCalledWithTwoNumbers_ReturnsCorrectSum(int a, int b, int expectedResult)
        {
            // Act: Call the method we want to test
            int result = _calculator.Add(a, b);

            // Assert: Verify that the result is what we expect
            Assert.That(result, Is.EqualTo(expectedResult));
        }
    }
}
