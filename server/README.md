# World Capital Quiz Server

This is the server-side application for the World Capital Quiz project. It provides an API endpoint to fetch quiz questions about world capitals.

## Features
- Reads quiz data from a CSV file (`capitals.csv`).
- Provides a REST API endpoint to fetch random quiz questions.
- Built using Node.js and Express.

## Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

## Setup
1. Clone the repository to your local machine.
2. Navigate to the `server` directory:
   ```bash
   cd server
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Server
1. Start the server:
   ```bash
   node index.cjs
   ```
2. The server will start on `http://localhost:3001` by default. You can change the port by setting the `PORT` environment variable.

## API Endpoints
### `GET /getQuestion`
- Returns a random quiz question from the dataset.
- Example response:
  ```json
  {
    "country": "France",
    "capital": "Paris"
  }
  ```

## File Structure
- `index.cjs`: Main server file.
- `capitals.csv`: Dataset containing country-capital pairs.
- `package.json`: Contains project metadata and dependencies.

## Notes
- Ensure the `capitals.csv` file is present in the `server` directory.
- The server currently reads data from the CSV file. Future versions may integrate a database for better scalability.

## License
This project is licensed under the MIT License.