module.exports = ({ env }) => ({
  host: env('API_HOST', '0.0.0.0'),
  port: env.int('API_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6d0e14af11b67ab842909de6c252a5b0'),
    },
  },
});
