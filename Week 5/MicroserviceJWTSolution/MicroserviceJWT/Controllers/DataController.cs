using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MicroserviceJWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet]
        [Authorize] // This attribute secures the endpoint
        public IActionResult Get()
        {
            // This endpoint can only be accessed by users with a valid JWT.
            var username = User.Identity.Name;
            return Ok($"Hello, {username}! This is a secure message.");
        }
    }
}