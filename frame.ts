export default async function handler(req, res) {
  res.json({
    title: "🎮 BasketPop!",
    image: "https://your-domain.com/images/basketpop-cover.png",
    buttons: [
      { label: "Lempar Bola", action: "/api/result" },
      { label: "Spin Gratis 🎁", action: "/api/spin" },
      { label: "Top-Up Bola 💰", action: "/api/topup" },
      { label: "Leaderboard 🏆", action: "/api/leaderboard" },
    ],
  });
}