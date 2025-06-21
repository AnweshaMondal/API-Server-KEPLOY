# My API Server

This project is a simple API server built with Node.js, Express.js, and MongoDB. It exposes custom APIs for managing data through CRUD operations.

## API Endpoints

### 1. Get All Data
- **Endpoint:** `/api/data`
- **Method:** `GET`
- **Description:** Retrieves all data entries from the database.
- **Response:** Returns an array of data objects.

### 2. Get Data by ID
- **Endpoint:** `/api/data/:id`
- **Method:** `GET`
- **Description:** Retrieves a single data entry by its ID.
- **Response:** Returns the data object with the specified ID.

### 3. Create Data
- **Endpoint:** `/api/data`
- **Method:** `POST`
- **Description:** Creates a new data entry.
- **Request Body:** JSON object representing the data to be created.
- **Response:** Returns the created data object.

### 4. Update Data
- **Endpoint:** `/api/data/:id`
- **Method:** `PUT`
- **Description:** Updates an existing data entry by its ID.
- **Request Body:** JSON object representing the updated data.
- **Response:** Returns the updated data object.

### 5. Delete Data
- **Endpoint:** `/api/data/:id`
- **Method:** `DELETE`
- **Description:** Deletes a data entry by its ID.
- **Response:** Returns a message confirming the deletion.

## Database Integration

This project uses MongoDB as the database. The connection is established using Mongoose, and the data schema is defined in the `src/models/dataModel.js` file. The connection string is stored in the `.env` file for security.

## How to Run the Server

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-api-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

5. Start the server:
   ```
   npm start
   ```

The server will run on `http://localhost:3000`.

## How to Interact with the API

You can use tools like Postman or curl to interact with the API endpoints. Below are some sample requests:

### Sample Request to Create Data
```
POST /api/data
Content-Type: application/json

{
  "name": "Sample Data",
  "value": 123
}
```

### Sample Request to Get All Data
```
GET /api/data
```

### Sample Request to Update Data
```
PUT /api/data/<id>
Content-Type: application/json

{
  "name": "Updated Data",
  "value": 456
}
```

### Sample Request to Delete Data
```
DELETE /api/data/<id>
```

## Conclusion

This API server provides a foundation for building applications that require data management. You can extend its functionality by adding more features or integrating it with a frontend application.