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

## License
MIT