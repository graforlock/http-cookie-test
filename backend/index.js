const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  ctx.cookies.set('cookie', 'value', { httpOnly: true });
  next();
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);