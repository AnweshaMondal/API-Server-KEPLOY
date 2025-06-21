# My API Server

Hey! This is my custom API server project built using Node.js, Express.js, and MongoDB. I made this to practice building RESTful APIs and to get hands-on with backend development and database integration.

## What This Project Does

This server lets you manage data entries with full CRUD (Create, Read, Update, Delete) functionality. You can add, view, update, and delete data using simple API endpoints.

## My API Endpoints

### 1. Get All Data
- **Endpoint:** `/api/data`
- **Method:** `GET`
- **Description:** Fetches all data entries from the database.
- **Response:** Array of data objects.

### 2. Get Data by ID
- **Endpoint:** `/api/data/:id`
- **Method:** `GET`
- **Description:** Fetches a single data entry by its ID.
- **Response:** The data object with the specified ID.

### 3. Create Data
- **Endpoint:** `/api/data`
- **Method:** `POST`
- **Description:** Adds a new data entry.
- **Request Body:** JSON object with the data to add.
- **Response:** The created data object.

### 4. Update Data
- **Endpoint:** `/api/data/:id`
- **Method:** `PUT`
- **Description:** Updates an existing data entry by its ID.
- **Request Body:** JSON object with the updated data.
- **Response:** The updated data object.

### 5. Delete Data
- **Endpoint:** `/api/data/:id`
- **Method:** `DELETE`
- **Description:** Deletes a data entry by its ID.
- **Response:** Confirmation message.

## Database Stuff

I'm using MongoDB for storing all the data, and Mongoose to handle the connection and schema. The schema is in `src/models/dataModel.js`. My MongoDB connection string is kept safe in the `.env` file.

## How to Run My Server

1. Clone this repo:
   ```
   git clone <repository-url>
   ```
2. Go into the project folder:
   ```
   cd my-api-server
   ```
3. Install all the dependencies:
   ```
   npm install
   ```
4. Make a `.env` file in the root and add your MongoDB URI:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```
5. Start the server:
   ```
   npm start
   ```

The server will be running at `http://localhost:3000` (or whatever port you set).

## How to Use the API

You can use Postman, curl, or any HTTP client to hit the endpoints. Here are some examples:

### Create Data
```
POST /api/data
Content-Type: application/json

{
  "name": "Sample Data",
  "value": 123
}
```

### Get All Data
```
GET /api/data
```

### Update Data
```
PUT /api/data/<id>
Content-Type: application/json

{
  "name": "Updated Data",
  "value": 456
}
```

### Delete Data
```
DELETE /api/data/<id>
```

## Why I Made This

I wanted to get comfortable with building APIs from scratch, connecting to a real database, and documenting my work. This project is a solid starting point for any app that needs backend data management. Feel free to fork it or use it as a base for your own ideas!