const express = require('express');
const cors = require('cors');
const route = require('./src/routes/route');
const connectToDatabase = require('./src/database/db');
const port = 3300;

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/characters', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
