import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import currencyRoutes from './routes/currency';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', currencyRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
