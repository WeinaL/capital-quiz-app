# World Capital Quiz Server

This is the backend server for the World Capital Quiz application. It is built with Node.js, Express, and TypeScript, and serves quiz questions about world capitals.

## Features
- Serves random country/capital quiz questions from a JSON dataset
- REST API endpoint for fetching quiz questions
- Written in TypeScript and supports ES modules
- Includes automated tests using Jest and Supertest

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

- `GET /getQuestion` — Returns a random country/capital question as JSON.

  Example response:
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

## Deployment to GitHub

### Prerequisites
1. GitHub account
2. Repository with GitHub Actions enabled
3. GitHub Secrets configured (for environment variables)

### Setting up GitHub Secrets
1. Go to your repository settings
2. Navigate to Secrets and Variables > Actions
3. Add the following secrets:
   - `PORT`: The port number for the server (e.g., 3001)

### Deployment Steps
1. Push your changes to the master branch:
   ```powershell
   git add .
   git commit -m "Update server for deployment"
   git push origin master
   ```

2. The GitHub Actions workflow will automatically:
   - Install dependencies
   - Run tests
   - Build the application
   - Deploy the server

### Manual Deployment
1. Build the server:
   ```powershell
   npm run build
   ```

2. Create a `.env` file:
   ```env
   PORT=3001
   NODE_ENV=production
   ```

3. Start the production server:
   ```powershell
   npm run start:prod
   ```

### Monitoring
- Check the Actions tab in your GitHub repository for deployment status
- Review server logs in the Actions workflow
- Monitor the application through GitHub's runner metrics

### Troubleshooting
If the server fails to start:
1. Check the GitHub Actions logs
2. Verify environment variables are set correctly
3. Ensure all dependencies are properly installed
4. Check if the build process completed successfully

For local testing of the production build:
```powershell
npm run build
npm run start:prod
```

## License
MIT