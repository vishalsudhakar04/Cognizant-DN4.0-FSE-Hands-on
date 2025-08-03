using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.IO;

namespace FirstWebApi.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            // 1. Log the exception details to a file
            string logMessage = $"Exception occurred: {context.Exception.Message}\n" +
                                $"Stack Trace: {context.Exception.StackTrace}\n" +
                                $"Date: {DateTime.UtcNow}\n" +
                                "--------------------------------------------------\n";

            // NOTE: In a real app, you'd use a proper logging library.
            // For this exercise, we'll just write to a simple text file on the Desktop.
            string desktopPath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            string logFilePath = Path.Combine(desktopPath, "ApiErrorLog.txt");
            File.AppendAllText(logFilePath, logMessage);

            // 2. Set the result to a standardized error response
            // This creates a 500 Internal Server Error response with a user-friendly message.
            var result = new ObjectResult("An unexpected error occurred. Please try again later.")
            {
                StatusCode = 500
            };
            context.Result = result;

            // 3. Mark the exception as handled
            context.ExceptionHandled = true;
        }
    }
}
