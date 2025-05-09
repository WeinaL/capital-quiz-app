# World Capital Quiz Application

This is a full-stack application for the World Capital Quiz. It consists of a client-side React application and a server-side Node.js application.

## Features
- **Client**: A React-based user interface for taking the quiz.
- **Server**: A Node.js server that provides quiz questions via a REST API.
- **Data**: Quiz questions are sourced from a CSV file containing country-capital pairs.

## Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

## Setup
### Clone the Repository
1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd World-Capital-Quiz-pgDB
   ```

### Install Dependencies
#### Client
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

#### Server
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Application
### Start the Server
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Start the server:
   ```bash
   node index.cjs
   ```
3. The server will start on `http://localhost:3001` by default.

### Start the Client
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Start the React development server:
   ```bash
   npm start
   ```
3. The client will start on `http://localhost:3000` by default.

## File Structure
### Client
- `src/`: Contains the React components and application logic.
  - `components/`: Reusable React components like `answer.jsx`, `question.jsx`, and `score.jsx`.
  - `QuestionContext.js`: Context API for managing quiz state.
- `public/`: Contains static files like `index.html`.

### Server
- `index.cjs`: Main server file.
- `capitals.csv`: Dataset containing country-capital pairs.
- `package.json`: Contains project metadata and dependencies.

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

## Notes
- Ensure the `capitals.csv` file is present in the `server` directory.
- The server currently reads data from the CSV file. Future versions may integrate a database for better scalability.

## License
This project is licensed under the MIT License.