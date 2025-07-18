import { Router } from 'express';
import axios from 'axios';

const router = Router();
const BASE_URL = 'https://api.freecurrencyapi.com/v1';

router.get('/currencies', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/currencies`, {
      params: { apikey: process.env.API_KEY },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Currency list fetch failed' });
  }
});

router.get('/convert', async (req, res) => {
  const { base, target, amount } = req.query;
  try {
    const response = await axios.get(`${BASE_URL}/latest`, {
      params: {
        apikey: process.env.API_KEY,
        base_currency: base,
        currencies: target,
      },
    });
    const rate = response.data.data[target as string];
    res.json({ result: +amount! * rate, rate });
  } catch (err) {
    res.status(500).json({ error: 'Conversion failed' });
  }
});

export default router;
