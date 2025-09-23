import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import notesRoutes from './routes/notes.routes.js';
import canvaRoutes from './routes/canva.routes.js';
import authRoutes from './routes/auth.routes.js';



const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/api/notes', notesRoutes); 
app.use("/files", express.static(path.join(process.cwd(), "Files")));
app.use('/static', express.static(path.join(process.cwd(), 'data/Graph/Media')));
app.use('/api/canvas', canvaRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });
  
  export { app };