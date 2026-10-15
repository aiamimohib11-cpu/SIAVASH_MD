export async function askAI(question) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return "هوش مصنوعی هنوز تنظیم نشده است.";
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "تو دستیار هوشمند ربات SIAVASH_MD هستی. به دری ساده جواب بده."
            },
            {
              role: "user",
              content: question
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return "خطا در اتصال هوش مصنوعی؛ تنظیمات را بررسی کن.";
    }

    return data.choices?.[0]?.message?.content ||
      "فعلاً جواب آماده نیست.";

  } catch {
    return "اتصال هوش مصنوعی برقرار نشد.";
  }
  }
