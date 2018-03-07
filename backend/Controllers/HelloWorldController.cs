using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class HelloWorldController : Controller
    {
        public HelloWorldController()
        {}

        [HttpGet]
        public HelloWorld GetAll()
        {
            return new HelloWorld{ text = "Hello world from dotnet core api!"};
        }
    }
}