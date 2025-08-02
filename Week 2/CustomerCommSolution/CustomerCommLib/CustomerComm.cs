using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerCommLib
{
    public class CustomerComm
    {
        private readonly IMailSender _mailSender;

        public CustomerComm(IMailSender mailSender)
        {
            _mailSender = mailSender;
        }

        public bool SendMailToCustomer()
        {
            // In a real application, you would get the customer's email and a message here.
            string customerEmail = "cust123@abc.com";
            string message = "Some Message";

            return _mailSender.SendMail(customerEmail, message);
        }
    }
}
