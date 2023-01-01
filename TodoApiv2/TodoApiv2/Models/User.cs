﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TodoApiv2.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public  string? Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        
        public List<Todo> Todos { get; set; }
    }
}
