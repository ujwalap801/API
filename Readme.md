API Methods (HTTP Methods)
When interacting with a web-based API, the following HTTP methods are typically used. Each method has a specific purpose and meaning.

1.GET

Purpose: To retrieve data from the server.
Example: Getting a list of users from a server.
Usage:
GET /users

Response:
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
]

2.POST

Purpose: To send data to the server and create a new resource.
Example: Creating a new user.
Usage:
POST /users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john@example.com"
}

Response:
{
  "id": 3,
  "name": "John Doe",
  "email": "john@example.com"
}


3.PUT

Purpose: To update an existing resource on the server (replaces the entire resource).
Example: Updating a user's details.
Usage:

PUT /users/1
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john.new@example.com"
}


Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john.new@example.com"
}


4.PATCH

Purpose: To partially update an existing resource (modifies part of the resource).
Example: Updating just the email of a user.
Usage:
PATCH /users/1
Content-Type: application/json
{
  "email": "john.updated@example.com"
}

Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john.updated@example.com"
}


5.DELETE

Purpose: To delete a resource from the server.
Example: Deleting a user.
Usage:
DELETE /users/1
Response:
{
  "message": "User deleted successfully"
}
