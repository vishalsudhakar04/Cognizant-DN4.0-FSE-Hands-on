using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;

namespace FirstWebApi.Filters
{
    public class CustomAuthFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            // Check if the request header contains "Authorization"
            if (!context.HttpContext.Request.Headers.ContainsKey("Authorization"))
            {
                // If not, return a 400 Bad Request with a specific message
                context.Result = new BadRequestObjectResult("Invalid request - No Auth token");
                return;
            }

            // Get the value of the Authorization header
            string authHeader = context.HttpContext.Request.Headers["Authorization"].FirstOrDefault();

            // Check if the header value contains the word "Bearer"
            if (string.IsNullOrEmpty(authHeader) || !authHeader.Contains("Bearer"))
            {
                // If not, return a 400 Bad Request with a different message
                context.Result = new BadRequestObjectResult("Invalid request - Token present but Bearer unavailable");
                return;
            }

            // If both checks pass, continue with the normal execution of the action
            base.OnActionExecuting(context);
        }
    }
}
