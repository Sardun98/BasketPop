// pages/api/leaderboard.ts
import type { VercelRequest, VercelResponse } from 'vercel';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    topPlayers: [
      { address: "0xUser1...", score: 17 },
      { address: "0xUser2...", score: 14 },
      { address: "0xUser3...", score: 11 }
    ]
  });
}

