const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080
});

// IIFE bby 💯
(async function remixToIgnition() {
  // 1.
  await server.register([
    require('inert'),
    {
      plugin:require('hapi-pino'),
      options: { prettyPrint: true },
    },
  ]);
  // 2.
  await server.route([
    {
      method: 'GET',
      path: '/',
      handler: { file: `${__dirname}/index.html` },
    },
  ]);
  // 3. 
  server.start();
})();

process.on('unhandledRejection', function outFielder(longBall) {
  console.error(`BIG CATCH: ${longBall}\nYou're outta there...`)
});