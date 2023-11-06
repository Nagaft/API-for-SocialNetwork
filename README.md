# API-for-SocialNetwork
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)[(https://opensource.org/licenses/MIT)]

## Description

A RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.
![work](/assets/work.png)


## Features

-User registration and management.

-CRUD operations for thoughts.

-Add reactions to thoughts.

-Manage a friend list for each user.

## Prerequisites
Node.js

## Usage

The API provides several endpoints for managing users, thoughts, reactions, and friends:

### Users:

- **Register a New User**:
  - **Method**: `POST`
  - **Endpoint**: `/api/users`
  - **Body**:
    ```json
    {
      "username": "exampleUser",
      "email": "example@email.com"
    }
    ```

- **Retrieve All Users**:
  - **Method**: `GET`
  - **Endpoint**: `/api/users`

- **Retrieve a User by ID**:
  - **Method**: `GET`
  - **Endpoint**: `/api/users/:id`

- **Update a User**:
  - **Method**: `PUT`
  - **Endpoint**: `/api/users/:id`
  - **Body** (example):
    ```json
    {
      "username": "updatedUsername"
    }
    ```

- **Delete a User**:
  - **Method**: `DELETE`
  - **Endpoint**: `/api/users/:id`

- **Add a Friend**:
  - **Method**: `POST`
  - **Endpoint**: `/api/users/:userId/friends/:friendId`

- **Remove a Friend**:
  - **Method**: `DELETE`
  - **Endpoint**: `/api/users/:userId/friends/:friendId`

### Thoughts:

- **Create a New Thought**:
  - **Method**: `POST`
  - **Endpoint**: `/api/thoughts`
  - **Body** (example):
    ```json
    {
      "thoughtText": "This is a sample thought.",
      "userId": "exampleUserId"
    }
    ```

- **Retrieve All Thoughts**:
  - **Method**: `GET`
  - **Endpoint**: `/api/thoughts`

- **Retrieve a Thought by ID**:
  - **Method**: `GET`
  - **Endpoint**: `/api/thoughts/:id`

- **Update a Thought**:
  - **Method**: `PUT`
  - **Endpoint**: `/api/thoughts/:id`
  - **Body** (example):
    ```json
    {
      "thoughtText": "Updated thought text."
    }
    ```

- **Delete a Thought**:
  - **Method**: `DELETE`
  - **Endpoint**: `/api/thoughts/:id`

### Reactions:

- **Add a Reaction to a Thought**:
  - **Method**: `POST`
  - **Endpoint**: `/api/thoughts/:thoughtId/reactions`
  - **Body** (example):
    ```json
    {
      "reactionBody": "This is a sample reaction.",
      "userId": "exampleUserId"
    }
    ```

- **Remove a Reaction from a Thought**:
  - **Method**: `DELETE`
  - **Endpoint**: `/api/thoughts/:thoughtId/reactions/:reactionId`

### Friends:

- **Add a Friend**:
  - **Method**: `POST`
  - **Endpoint**: `/api/users/:userId/friends/:friendId`

- **Remove a Friend**:
  - **Method**: `DELETE`
  - **Endpoint**: `/api/users/:userId/friends/:friendId`

## Installation

1. Clone the Repository:
   git clone [https://github.com/Nagaft/API-for-SocialNetwork]

2. Navigate to the Project Folder:
   

3. Install Dependencies:
npm install

4. Set up your MongoDB database and ensure it's running.

5. Start the server:
   node server.js


## Contributing

We welcome contributions. Please feel free to submit a pull request or open an issue on GitHub.

## Testing

To test the API endpoints, you can use tools like Insomnia or Postman.

## License

This project is licensed under the MIT License.

## Contact

- GitHub: [https://github.com/Nagaft/API-for-SocialNetwork](https://github.com/Nagaft/API-for-SocialNetwork)
- Email: nagaf999@gmail.com