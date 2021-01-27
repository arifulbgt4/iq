module.exports = {
  index: async (ctx) => {
    const options = ctx.request.body;
    try {
      await strapi.plugins.email.services.email.send({
        to: process.env.SENDGRID_TO_MAIL,
        from: options.email,
        subject: options.subject,
        text: options.message,
      });
    } catch (e) {
      if (e.statusCode === 400) {
        return ctx.badRequest(e.message);
      }
      throw new Error(`Couldn't send email: ${e.message}.`);
    }

    // Send 200 `ok`
    ctx.send('Email sent');
  },
};
