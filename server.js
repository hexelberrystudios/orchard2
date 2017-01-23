'use strict'

process.env.VUE_ENV = 'server';
const Hapi = require('hapi');
const hoodie = require('hoodie').register;
const server = new Hapi.Server();
const routes = require('./src/router/server.js');

// @TODO: favicon
// init server connection
server.connection({
  host: 'localhost',
  port: 8000
});

// setup routes
server.route(routes(server));

// setup views, since hapi requires them regardless of
// whether or not we use them.
server.register(require('vision'), function (error) {
  if (error) {
    throw error;
  }

  server.views({
    engines: {
      html: require('ejs')
    },
    relativeTo: __dirname,
    path: 'src',
    layoutPath: '/',
    layout: 'index',
    partialsPath: 'src/components'
  });
});

// setup serving static files
server.register(require('inert'), function (error) {
  if (error) {
    throw error;
  }

  server.route({
    method: 'GET',
    path: '/dist/{file*}',
    handler: {
      directory: {
        path: 'dist',
        lookupCompressed: true
      }
    }
  });
});

// setup hoodie/server
/* NOTE: options.path.public MUST be 'dist', and the 'dist' folder
   must exist in the root directory in order for this to work */
server.register({
  register: hoodie,
  options: { // pass options here
    inMemory: true,
    paths: {
      public: 'dist'
    }
  }
}, function (error) {
  if (error) {
    throw error
  }
  
  server.start(function (error) {
    if (error) {
      throw error
    }

    console.log(('Server running at:', server.info.uri));
  });
});
