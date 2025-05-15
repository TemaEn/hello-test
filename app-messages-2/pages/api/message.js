export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(
      `[${process.env.APP_NAME}] Получено сообщение от ${req.body.from}: "${req.body.message}"`
    );
    res.status(200).json({ received: true });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
