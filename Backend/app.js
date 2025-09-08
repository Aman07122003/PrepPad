import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });
  
  export { app };