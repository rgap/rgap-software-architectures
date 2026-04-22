# Demo Tiny Task API

This is a demonstration project for the "What Software Architecture Is" section. It illustrates a basic layered architecture in a Node.js application.

## Architectural Elements

This small API is divided into distinct parts, each with its own responsibility:

- **Routes**: Define the endpoints and map HTTP methods to controllers.
- **Controllers**: Handle HTTP requests/responses and coordinate with services.
- **Services**: Contain the core business logic.
- **Repositories**: Handle data access logic.
- **Models**: Define the data structure/types.
- **Data**: A mock in-memory database for demonstration purposes.

## How to Run

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the server.
3. Run `npm test` to execute the tests.
