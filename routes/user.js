module.exports = ({ router }) => {
  router.post('/login', (ctx, next) => {
    ctx.body = { token: 'test.token.max' };
  });
};
