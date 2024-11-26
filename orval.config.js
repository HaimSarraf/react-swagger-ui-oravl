// orval.config.js
module.exports = {
  api: {
    input: {
      target: "https://petstore.swagger.io/v2/swagger.json", // OpenAPI spec URL
    },
    output: {
      target: "./src/api/generated.ts", // Output file for the generated API client
      client: "react-query", // Use Axios as the HTTP client
    },
  },
};
