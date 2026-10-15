import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>SIAVASH_MD</title>
      <style>
        body {
          background: #080808;
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 40px 15px;
        }
        .box {
          max-width: 420px;
          margin: auto;
          padding: 25px;
          background: #151515;
          border: 1px solid #333;
          border-radius: 18px;
        }
        h1 { color: #00ff99; }
        p { line-height: 2; color: #ddd; }
        a {
          display: block;
          margin: 12px 0;
          padding: 13px;
          background: #222;
          border-radius: 10px;
          color: white;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>SIAVASH_MD 🖤</h1>
        <p>پنل ربات آماده است!</p>
        <p>وضعیت سایت: فعال ✅</p>
        <a href="https://whatsapp.com/channel/0029VayBtTv7z4kd8pudOZ2o">کانال اول</a>
        <a href="https://whatsapp.com/channel/0029VbCt0QwAYlURegmYYp2J">کانال دوم</a>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    bot: "SIAVASH_MD"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`SIAVASH_MD is running on port ${PORT}`);
});
