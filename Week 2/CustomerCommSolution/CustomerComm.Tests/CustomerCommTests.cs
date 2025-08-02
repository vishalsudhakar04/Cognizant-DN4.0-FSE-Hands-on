using CustomerCommLib;
using Moq;
using NUnit.Framework;

// The namespace has been changed to avoid a naming conflict.
namespace CustomerCommLib.Tests
{
    [TestFixture]
    public class CustomerCommTests
    {
        [Test]
        public void SendMailToCustomer_WhenCalled_ReturnsTrue()
        {
            // Arrange: Set up the test
            var mockMailSender = new Mock<IMailSender>();

            mockMailSender.Setup(sender => sender.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                          .Returns(true);

            var customerComm = new CustomerComm(mockMailSender.Object);


            // Act: Call the method we want to test
            bool result = customerComm.SendMailToCustomer();


            // Assert: Verify that the result is what we expect
            Assert.IsTrue(result);
        }
    }
}
