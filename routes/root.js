module.exports = ({ router }) => {
  router.get('/', (ctx, next) => {
    ctx.body = { version: '1.0.0' };
  });
};
