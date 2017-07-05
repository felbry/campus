const logger = require('koa-logger');
const staticFile = require('koa-static');
const koaBody = require('koa-body');
const jwt = require('koa-jwt');
const cors = require('kcors');
const koa = require('koa');
const path = require('path');

const config = require('./config.js');
const tools = require('./tools');
const router = require('./routes');
const dbTables = require('./db/init');

const app = new koa();

app.use(cors());
// Log
app.use(logger());
app.use(tools.handleError());
app.use(koaBody({
    multipart: true,
    onError: function (err, ctx) {
        ctx.throw(400, 'Bad Request', err);
    },
}));

// Serve static files
app.use(staticFile(path.join(__dirname, 'public')));
app.use(router.publicApi.routes());

// jwt
// user validate
app.use(jwt({
    secret: config.userKey,
    // sudo isRevoked
    isRevoked: function (ctx, decodedToken, token) {
        return Promise.resolve(false);
    }
}).unless({
    path: [/^\/api\/admin/]
}));
// admin validate
app.use(jwt({
    secret: config.adminKey,
}).unless({
    path: [/^\/api\/v/]
}));

app.use(router.privateApi.routes());

app.listen(config.port, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Node app is running on port:', config.port);
});
