import { app } from "./app.js";

const port = process.env.PORT || process.env.port || 9000;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully.");
  server.close(() => process.exit(0));
});
