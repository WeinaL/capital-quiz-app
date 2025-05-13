export default {
  testEnvironment: "node",
    transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
};
