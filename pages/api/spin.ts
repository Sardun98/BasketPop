// pages/api/spin.ts
import type { VercelRequest, VercelResponse } from 'vercel';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const lang = req.query.lang || 'en';
  const reward = Math.floor(Math.random() * 100) + 1;

  const messages: Record<string, string> = {
    en: `You got ${reward} balls!`,
    id: `Kamu dapat ${reward} bola!`,
    zh: `你获得了 ${reward} 个球！`
  };

  res.status(200).json({
    reward,
    message: messages[lang as string] || messages.en
  });
}

