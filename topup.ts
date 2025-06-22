export default async function handler(req, res) {
  const walletTujuan = "0x1DaFc40C7AFa06B426C62047176176C5812887dA";
  res.json({
    message: `Kirim USDC (Base) ke alamat berikut untuk top-up bola. 1 USDC = 1.000 bola`,
    wallet: walletTujuan,
    qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${walletTujuan}`
  });
}