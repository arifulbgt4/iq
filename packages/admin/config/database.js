module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '0.0.0.0'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'stripe'),
        username: env('DATABASE_USERNAME', 'stripe'),
        password: env('DATABASE_PASSWORD', 'stripe'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {},
    },
  },
});
