const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.post('/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received:', receivedData);
  res.json({ message: 'Data received successfully', data: receivedData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
