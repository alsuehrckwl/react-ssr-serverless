import * as React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Root from '../../src/common/Root';
import routeConfig from '../../src/common/RouteConfig';
import Helmet from 'react-helmet';

export const renderApp = async (ctx) => {
  const { path, url } = ctx;
  const promises = [];

  routeConfig.every((route) => {
    const match = matchPath(path, route);

    if (match) {
      if (!!route.preload) {
        const { preload } = route;
        const { context, api } = preload;

        promises.push();
      }

      return true;
    }
    return true;
  });

  try {
    // await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }

  const context = {};
  const app = (<StaticRouter context={context}>
    <Root />
  </StaticRouter>)
  const html = renderToString(app);
  const helmet = Helmet.renderStatic();

  return {
    html,
    helmet,
    context,
    state: {}
  };

};

