# World Capital Quiz

A full-stack web application that tests users' knowledge of world capitals. Built with React, TypeScript, and Express, featuring real-time scoring, beautiful UI with Tailwind CSS, and comprehensive test coverage.

## Live Demo
- Frontend: [https://capital-quiz-client.vercel.app](https://capital-quiz-client.vercel.app)
- Backend API: [https://capital-quiz-app.onrender.com](https://capital-quiz-app.onrender.com)

## Features
- 🌍 Quiz game testing knowledge of world capitals
- 🎯 Real-time score tracking
- 💅 Modern, responsive UI with Tailwind CSS
- 🔒 Type-safe development with TypeScript
- 🧪 Comprehensive test coverage
- 🚀 CI/CD with GitHub Actions

## Tech Stack

### Frontend (Client)
- React 18 with TypeScript
- Tailwind CSS for styling
- React Testing Library & Jest for testing
- React Context API for state management
- Vercel for deployment

### Backend (Server)
- Node.js with Express
- TypeScript for type safety
- Jest & Supertest for API testing
- Render for deployment
- CORS enabled for secure client-server communication

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.tsx        # Main application component
│   │   └── QuestionContext.tsx  # Question state management
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
└── server/                # Backend Express application
    ├── src/              # TypeScript source code
    ├── data/             # Quiz data
    ├── tests/            # API tests
    └── package.json      # Backend dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm (included with Node.js)

### Setting up the Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The server will run on http://localhost:3001

### Setting up the Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will run on http://localhost:3000

## Testing

### Running Backend Tests
```bash
cd server
npm test
```

### Running Frontend Tests
```bash
cd client
npm test
```

## Deployment

### Frontend (Vercel)
The frontend is automatically deployed to Vercel through GitHub Actions. The workflow:
1. Runs tests
2. Builds the application
3. Deploys to Vercel if tests pass

### Backend (Render)
The backend is hosted on Render with automatic deployments from the master branch.

## Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3001  # Development
REACT_APP_API_URL=https://capital-quiz-app.onrender.com  # Production
```

### Backend
No environment variables required for basic setup. The server runs on PORT 3001 by default.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License.

## Credits
- Country and capital data is owned by Web Development course @Undemy
