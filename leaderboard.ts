export default async function handler(req, res) {
  res.json({
    topPlayers: [
      { address: "0xUser1...", score: 17 },
      { address: "0xUser2...", score: 12 },
      { address: "0xUser3...", score: 9 },
    ]
  });
}