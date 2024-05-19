const sanity = {
  API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-04-16",
  DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5gb1g75a",
};

const google = {
  CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
};

const telegram = {
  token: process.env.NEXT_PUBLIC_BOT_TOKEN,
  apiUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL,
  targetName: process.env.NEXT_PUBLIC_TARGET_NAME,
};

const jwt = {
  jwtExpiration: process.env.ENV_JWT_EXPIRATION || "1h",
  jwtSecret: process.env.ENV_JWT_SECRET || "secret",
};

const API_ROUTES = {
  USER: {
    GET_ME: `/api/user`,
    UPDATE: `/api/user`,
    DELETE: `/api/user`,
  },
  ORDERS: {
    CREATE: `/api/orders`,
    GET_ALL: `/api/orders`,
  },
};

const bonuses = {
  bonusRate: 0.05,
  pickupDiscount: 10,
  more10k: 5,
  welcomeDiscount: 10,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { sanity, google, telegram, jwt, API_ROUTES, bonuses };
