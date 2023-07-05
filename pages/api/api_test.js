export default function handler(req, res) {
  res.status(200).json({host : process.env.DB})
}
