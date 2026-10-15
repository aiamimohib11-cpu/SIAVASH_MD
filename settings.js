export const settings = {
  name: "SIAVASH_MD",
  prefix: ".",
  language: "fa",
  owner: "",
  mode: "public",
  version: "1.0.0"
};

export function getSettings() {
  return {
    ...settings,
    owner: settings.owner ? "تنظیم شده" : "تنظیم نشده"
  };
}
