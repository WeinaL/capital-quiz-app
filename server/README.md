# World Capital Quiz Server

This is the backend server for the World Capital Quiz application. It is built with Node.js, Express, and TypeScript, and serves quiz questions about world capitals.

## Live Demo
API Base URL: [https://capital-quiz-app.onrender.com](https://capital-quiz-app.onrender.com)

## Features
- Serves random country/capital quiz questions from a JSON dataset
- REST API endpoint for fetching quiz questions
- Written in TypeScript and supports ES modules
- Includes automated tests using Jest and Supertest
- CORS enabled for secure client-server communication

## Prerequisites
- Node.js v18 or later (v20+ recommended for full ESM support)
- npm

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Build the project:**
   ```sh
   npm run build
   ```

3. **Start the server:**
   ```sh
   npm start
   ```
   The server will start on the default port (see `src/index.ts`).

## API Endpoints

- `GET /getQuestion` — Returns a random country/capital question as JSON
- `GET /getAllQuestions` — Returns all available questions

Example response from `/getQuestion`:
```json
{
  "id": 1,
  "country": "Afghanistan",
  "capital": "Kabul"
}
```

## Project Structure

- `src/` — TypeScript source files
- `data/capitals.json` — The quiz data (countries and capitals)
- `build/` — Compiled JavaScript output
- `tests/` — Automated test files

## Testing

Run all tests with:
```sh
npm test
```

Tests are written using Jest and Supertest, and are compatible with ESM.

## Notes
- JSON imports use the `assert { type: "json" }` syntax in the source code.
- If you encounter issues with imports or running tests, ensure your Node.js and Jest versions support ESM and JSON imports.

## Deployment to Render

### Prerequisites
1. GitHub account with your repository
2. [Render](https://render.com) account
3. Node.js and npm installed locally for testing

### Deployment Steps

1. Push your changes to GitHub:
   ```powershell
   git add .
   git commit -m "Update server for deployment"
   git push origin main
   ```

2. Set up on Render:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - Name: `capital-quiz-app` (or your preferred name)
     - Environment: `Node`
     - Build Command: `npm install;  npm run build`
     - Start Command: `npm start`
     - Branch: `master`


### Monitoring
- Check the Actions tab in your GitHub repository for deployment status
- Review server logs in the Actions workflow
- Monitor the application through GitHub's runner metrics

### CORS Configuration

The server is configured to accept requests from:
- https://capital-quiz-client.vercel.app (production)
- http://localhost:3000 (development)

### Troubleshooting
If the server fails to start or deploy:
1. Check Render deployment logs
2. Verify TypeScript compilation succeeds (`npm run build`)
3. Check CORS configuration if client can't connect
4. Ensure all dependencies are properly installed

For local testing before deployment:
```powershell
npm run build
npm start
```

To verify the API is working:
```powershell
Invoke-RestMethod -Uri "https://capital-quiz-app.onrender.com/api"
```

## License
MIT