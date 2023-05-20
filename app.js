import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on http://localhost:${PORT}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
