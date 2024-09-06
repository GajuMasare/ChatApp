The packges used are:
express, dotenv, cookie-parser, bcryptjs, mongoose, socket.io, jsonwebtoken, nodemon

1. Express
   Description: A minimal and flexible Node.js web application framework.
   Use in Chat App: Helps create a server to handle HTTP requests, manage routes, and serve both the client-side React app and API endpoints for the backend.

2. dotenv
   Description: A module that loads environment variables from a .env file into process.env.
   Use in Chat App: Securely manage configuration secrets, like database credentials, API keys, and JWT secrets, without hardcoding them into your source code.

3. cookie-parser
   Description: Middleware for parsing cookies attached to client requests.
   Use in Chat App: Handles cookies to store session tokens, manage user authentication state, and track user sessions.

4. bcryptjs
   Description: A library for hashing passwords.
   Use in Chat App: Hashes user passwords before storing them in the database to enhance security and verify passwords during login.

5. mongoose
   Description: An Object Data Modeling (ODM) library for MongoDB and Node.js.
   Use in Chat App: Provides a schema-based solution to model application data, manage user accounts, messages, and chat data within a MongoDB database.

6. socket.io
   Description: A library for real-time, bidirectional communication between web clients and servers.
   Use in Chat App: Enables real-time features like sending and receiving chat messages instantly between users and broadcasting events (like user typing notifications).

7. jsonwebtoken
   Description: A library for generating and verifying JSON Web Tokens (JWT).
   Use in Chat App: Manages authentication by generating tokens after successful login, validating them on each request, and ensuring secure communication between the client and server.

8. nodemon
   with this we dont need to restart the backend server after every changes
