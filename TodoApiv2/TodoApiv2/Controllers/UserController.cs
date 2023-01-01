using BCrypt.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using TodoApiv2.Models;

namespace TodoApiv2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiConventionType(typeof(DefaultApiConventions))]

    public class UserController : ControllerBase
    {
        private readonly IMongoCollection<User> _users;
        
        public UserController()
        {
            var ConnectionString = "mongodb+srv://walid:walidhassan1011@cluster0.b9m9hni.mongodb.net/?retryWrites=true&w=majority";
            var DatabaseName = "TodoApp";
            var UsersCollection = "Users";
            var mongoURl = MongoUrl.Create(ConnectionString);
            var client = new MongoClient(mongoURl);
            var database = client.GetDatabase(DatabaseName);
            _users = database.GetCollection<User>(UsersCollection);
            
            
        }


        [HttpPost]
        [Consumes("application/json")]
        public async  Task<IActionResult> AddUser(User user)
        {
            user.Password=BCrypt.Net.BCrypt.HashPassword(user.Password);
            await _users.InsertOneAsync(user);

            return Ok();
        }

        [HttpGet]
        [Consumes("application/json")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _users.Find(user => true).ToListAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetUserById(string id)
        {
            var user = await _users.Find(user => user.Id == id).FirstOrDefaultAsync();
            return Ok(user);
        }
        [HttpGet]
        //get user by email and password
      
        [Route("login/{email}/{password}")]
        public async Task<IActionResult> GetUserByEmailAndPassword(string email, string password)
        {
            var user = await _users.Find(user => user.Email == email).FirstOrDefaultAsync();
            if (user == null)
            {
                return NotFound("User not found");
            }
            if (BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return Ok(user);
            }
            else
            {
                return NotFound(" Password is incorrect");
            }
        }
       

        [HttpDelete("{id}")]
        [Consumes("application/json")]
        public async Task<IActionResult> DeleteUserById(string id)
        {
            await _users.DeleteOneAsync(user => user.Id == id);
            return Ok();
        }
        // delete todo

        [HttpDelete("{id}/{todoId}")]
        [Consumes("application/json")]
        public async Task<IActionResult> DeleteTodoById(string id, int todoId)
        {
            var user = await _users.Find(user => user.Id == id).FirstOrDefaultAsync();
            if (user == null)
            {
                return NotFound("User not found");
            }
            var todo = user.Todos.Find(todo => todo.Id == todoId);
            if (todo == null)
            {
                return NotFound("Todo not found");
            }
            user.Todos.Remove(todo);
            await _users.ReplaceOneAsync(user => user.Id == id, user);
            return Ok();
        }

        [HttpPut("{id}")]
        [Consumes("application/json")]
        public async Task<IActionResult> UpdateUserById(string id, User user)
        {
            
            await _users.ReplaceOneAsync(user => user.Id == id, user);
            return Ok();
        }


    }
}
