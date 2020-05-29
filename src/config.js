const dev = {
  STRIPE_KEY: 'pk_test_Qzpqxw8oqfWF4vusTPrPEDs4',
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'note-app-asdfjk-uploads',
  },
  apiGateway: {
    REGION: 'ap-south-1',
    URL: 'https://nj7doo7r23.execute-api.ap-south-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_F6VEUumV5',
    APP_CLIENT_ID: '4rt26ofo383d4pu3ok8us4b1fm',
    IDENTITY_POOL_ID: 'ap-south-1:0d58f8e5-b244-4e64-a00f-4f732a347745',
  },
};

const prod = {
  STRIPE_KEY: 'pk_test_Qzpqxw8oqfWF4vusTPrPEDs4',
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'note-app-asdfjk-uploads',
  },
  apiGateway: {
    REGION: 'ap-south-1',
    URL: 'https://nj7doo7r23.execute-api.ap-south-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_F6VEUumV5',
    APP_CLIENT_ID: '4rt26ofo383d4pu3ok8us4b1fm',
    IDENTITY_POOL_ID: 'ap-south-1:0d58f8e5-b244-4e64-a00f-4f732a347745',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
