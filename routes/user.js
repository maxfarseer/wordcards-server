module.exports = ({ router }) => {
  router.post('/login', (ctx, next) => {
    ctx.body = { token: 'test.token.max' };
  });

  router.post('/register', (ctx, next) => {
    const { username, email, password } = ctx.request.body;
    ctx.body = { token: `test.token.heometric`, username };
  });
};
