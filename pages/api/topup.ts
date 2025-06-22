// pages/api/topup.ts
import type { VercelRequest, VercelResponse } from 'vercel';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    wallet: "0x1dafc40c7afa06b426c62047176176c5812887da",
    network: "Base",
    currency: "USDC",
    rate: "1 USDC = 1000 bola",
    note: "Transfer ke wallet di atas. Bola otomatis bertambah."
  });
}

