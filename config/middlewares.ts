export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://console.cloudinary.com",
            "https://res.cloudinary.com",
          ],
          "script-src": [
            "'self'",
            "example.com",
            "https://media-library.cloudinary.com",
            "https://upload-widget.cloudinary.com",
            "https://console.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://console.cloudinary.com",
            "https://res.cloudinary.com",
          ],
          "frame-src": [
            "'self'",
            "https://media-library.cloudinary.com",
            "https://upload-widget.cloudinary.com",
            "https://console.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["*"], // allow all origins (safe for testing only)
      credentials: true, // allow cookies / auth headers to be sent
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
      maxAge: 31536000, // 1 year (browser can cache preflight requests)
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
