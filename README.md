# World Capital Quiz Application

A modern full-stack TypeScript application featuring a React frontend with Tailwind CSS and a Node.js/Express backend, complete with comprehensive unit testing 

## Features
- **Frontend**: React with TypeScript, styled with Tailwind CSS for a responsive and modern UI
- **Backend**: Node.js/Express server with TypeScript for type-safe API endpoints
- **Testing**: Comprehensive unit testing using Jest and React Testing Library
- **Data**: Type-safe handling of quiz questions using TypeScript interfaces

## Prerequisites
- Node.js (v16 or later)
- npm (Node Package Manager)
- TypeScript 5.0+
- Jest for testing

## Technical Stack
### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Jest and React Testing Library for unit testing
- Context API for state management

### Backend
- Node.js/Express with TypeScript
- Jest and Supertest for API testing
- PostgreSQL database integration

## Deployment
### GitHub Setup
1. Create a new repository on GitHub.

2. Initialize and push to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M master
   git remote add origin <your-github-repo-url>
   git push -u origin master
   ```

### Production Build
1. Install all dependencies:
   ```powershell
   npm run install-all
   ```

2. Build the application:
   ```powershell
   npm run build
   ```

3. Run tests to ensure everything works:
   ```powershell
   npm test
   ```

### Environment Setup
1. Create a `.env` file in the server directory:
   ```env
   PORT=3001
   NODE_ENV=production
   ```

2. Create a `.env` file in the client directory:
   ```env
   REACT_APP_API_URL=http://localhost:3001
   ```

### Starting the Application
1. For development (runs both client and server):
   ```powershell
   npm run dev
   ```

2. For production:
   ```powershell
   npm start
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
   npm dev
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
- `capitals.json`: Dataset containing country-capital pairs.
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
- Ensure the `capitals.json` file is present in the `server` directory.
- The server currently reads data from the CSV file. Future versions may integrate a database for better scalability.

## License
This project is licensed under the MIT License.