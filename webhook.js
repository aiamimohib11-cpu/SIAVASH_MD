import express from "express";

const router = express.Router();

router.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode === "subscribe" &&
    token === process.env.WHATSAPP_VERIFY_TOKEN
  ) {
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

router.post("/webhook", (req, res) => {
  const body = req.body;

  if (body.object === "whatsapp_business_account") {
    console.log("پیام واتساپ دریافت شد.");

    // پردازش پیام‌ها را در مرحله بعد اضافه می‌کنیم.
    return res.sendStatus(200);
  }

  return res.sendStatus(404);
});

export default router;
