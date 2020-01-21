import Koa from 'koa';
import compress from 'koa-compress';
import render from './render';

class Server {
  app;

  constructor() {
    this.app = new Koa();
    this.initServer();
  }

  async initServer() {
    this.app.use(
      compress({
        filter: (contentType) => {
          return /text/i.test(contentType);
        },
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
      })
    );

    this.app.use(render);
  }

  listen(port) {
    this.app.listen(port);
    console.log(`React SSR Listening to port ${port}`);
  }
}

export default Server;
