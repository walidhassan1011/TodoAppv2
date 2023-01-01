using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TodoApiv2.Models
{
    public class Todo
    {
        [BsonId]
        [BsonRepresentation(BsonType.Int32)]
      
        public int Id { get; set; }
        
        public string title { get; set; }

        public string Description { get; set; }
        
        public string status { get; set; }

        
        public DateTime createdAt { get; set; }
    }
}
