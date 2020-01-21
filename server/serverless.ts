import serverlessHttp from 'serverless-http';
import Server from './server';

const server = new Server();

export const handler = (event, context, cb) => {
  // something to do before serverlessHttp
  return serverlessHttp(server.app)(event, context);
};
