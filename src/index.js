require("dotenv").config();

const { dbConnect } = require("./functions/dbFunctions.js");
const { app } = require("./server.js");

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});
