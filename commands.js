export const commands = {
  menu: {
    name: "menu",
    description: "نمایش فهرست فرمان‌ها"
  },
  ping: {
    name: "ping",
    description: "بررسی وضعیت ربات"
  },
  ai: {
    name: "ai",
    description: "فرمان هوش مصنوعی"
  }
};

export function getMenu() {
  return Object.values(commands)
    .map(command => `.${command.name} — ${command.description}`)
    .join("\n");
}
