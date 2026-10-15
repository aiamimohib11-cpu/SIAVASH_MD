export function downloadHelp() {
  return [
    "📥 SIAVASH_MD Downloader",
    "",
    "برای دانلود از لینک‌های مجاز:",
    ".download <لینک>",
    "",
    "توجه: موتور دانلود هنوز تنظیم نشده است."
  ].join("\n");
}

export function isValidHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
