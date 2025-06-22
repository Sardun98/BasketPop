// pages/api/result.ts
import type { VercelRequest, VercelResponse } from 'vercel';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const masuk = Math.random() < 0.5;
  res.status(200).json({
    result: masuk ? "🏀 Masuk! +1 Skor" : "💨 Meleset!",
    score: masuk ? 1 : 0
  });
}

