const SHARED_KEYS = {
  port: process.env.port || 3001,
  db_port: 3306
};

const config = {
  local: {
    host: process.env.DB_HOSTNAME || 'localhost',
    database: process.env.DB_NAME || 'db',
    username: process.env.DB_USERNAME || 'app_user',
    password: process.env.DB_PASSWORD || 'app_user_1234',
    JWT_SECRET: 'ABCD'
  },
  development: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    JWT_SECRET: 'EFG'
  },
  production: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET || 'HIJKLMNOP'
  }
};
module.exports = { ...SHARED_KEYS, ...config[process.env.NODE_ENV] };
