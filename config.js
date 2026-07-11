// Настройка адреса бэкенда Киры.
// Локально: http://localhost:8787
// Прод: адрес вашего задеплоенного Node-бэкенда (Railway/Render/VPS), напр. https://kira-api.up.railway.app
window.KIRA_CONFIG = {
  BACKEND_URL:
    location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? "http://localhost:8787"
      : "https://kirabackend-production.up.railway.app",
};
