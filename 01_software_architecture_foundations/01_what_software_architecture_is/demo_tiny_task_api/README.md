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

## Reading the Demo Architecturally

As discussed in the main documentation, here is how you can answer the core architectural questions for this demo:

**1. What are the main parts of the system?**
The main parts are the Route definitions, Controllers, Services, Repositories, and the mock Data Layer. 

**2. What is each part responsible for?**
- **Routes**: Direct incoming HTTP requests to the right controller.
- **Controllers**: Parse the request (params, body), invoke the appropriate service, and return an HTTP response (JSON, status codes).
- **Services**: Execute application-specific business logic (e.g., throwing a "Task not found" error if the item doesn't exist).
- **Repositories**: Abstract the data source. They fetch or manipulate data from the database.
- **Data Layer**: The actual storage mechanism (in this case, an in-memory JS array).

**3. Which parts depend on which other parts?**
The dependency flows in one direction (top-down):
`Routes` -> `Controllers` -> `Services` -> `Repositories` -> `Data Layer`.
A lower layer (like a Repository) has no knowledge of the higher layers (like Controllers or Routes).

**4. Where are the boundaries?**
There are clear logical boundaries between the HTTP transport layer (`Routes` + `Controllers`), the business logic layer (`Services`), and the data persistence layer (`Repositories` + `Data`). The transport layer doesn't know how data is saved, and the data layer doesn't know about HTTP status codes.

**5. If one part changed, what else would likely be affected?**
- If the **database changes** (e.g., from an in-memory array to a real Postgres database), only the `Repositories` need to change. `Services`, `Controllers`, and `Routes` remain unaffected.
- If the **business logic changes** (e.g., adding a requirement that tasks need a description), the `Services` and possibly the `Models` would change.
- If the **API framework changes** (e.g., from Express to Fastify), only the `Routes` and `Controllers` need to change.
