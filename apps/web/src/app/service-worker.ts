self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Limpeza de caches antigos se necessário
});

self.addEventListener('fetch', event => {
  // Offline básico: responder com cache se offline
});