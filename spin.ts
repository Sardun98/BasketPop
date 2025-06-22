export default async function handler(req, res) {
  const hadiah = Math.floor(Math.random() * 100) + 1;
  res.json({
    message: `🎁 Kamu dapat ${hadiah} bola!`,
    addBalls: hadiah
  });
}