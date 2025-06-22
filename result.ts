export default async function handler(req, res) {
  const masuk = Math.random() < 0.5;
  res.json({
    message: masuk ? "🏀 Masuk! +1 Skor" : "💨 Meleset!",
    updateScore: masuk ? 1 : 0
  });
}