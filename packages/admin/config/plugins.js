module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultForm: env('SENDGRID_DEFAULT_FORM'),
      defaultReplayTo: env('SENDGRID_DEFAULT_REPLAY_TO'),
    },
  },
});
