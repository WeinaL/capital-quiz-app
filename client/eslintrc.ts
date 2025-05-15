module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    // Add or override rules here as needed
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
