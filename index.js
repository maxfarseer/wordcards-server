const logger = require('koa-logger');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');

const Koa = require('koa');
const app = new Koa();

app.use(cors());
app.use(logger());
app.use(koaBody());

/** error handling
 * https://codeburst.io/lets-build-a-rest-api-with-koa-js-and-test-with-jest-2634c14394d3
 */
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

const router = new Router();
const userRouter = new Router({
  prefix: '/api/user'
});
require('./routes/root')({ router });
require('./routes/user')({ router: userRouter });

app.use(router.routes());
app.use(router.allowedMethods());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(3000);
