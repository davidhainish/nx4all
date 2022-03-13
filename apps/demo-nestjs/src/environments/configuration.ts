export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  production: process.env.PRODUCTION,
  port: parseInt(process.env.PORT, 10) || 3333,
  openweatherAppId: process.env.OPENWEATHER_APP_ID
});
