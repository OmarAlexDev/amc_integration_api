export default () => ({
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET,
  AWS_CONFIG: {
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  },
  ADS_CONFIG: {
    ADS_REFRESH_TOKEN: process.env.ADS_REFRESH_TOKEN,
    ADS_GRANT_TYPE: 'refresh_token',
    ADS_CLIENT_ID: process.env.ADS_CLIENT_ID,
    ADS_CLIENT_SECRET: process.env.ADS_CLIENT_SECRET,
    ADS_AUTH_API: 'https://api.amazon.com',
    ADS_AMC_API: 'https://advertising-api.amazon.com',
    ADS_AMC_INSTANCE: process.env.ADS_AMC_INSTANCE,
  },
});
