import {renderApp } from "./ssr/ssr";

const manifest = require('../build/asset-manifest.json');

function getManifestPath() {
  // manifest url 
  // need server 
  return 'http://127.0.0.1:8080'
}

function jsInclude() {
  let result = ''
  
  manifest.entrypoints.forEach(item => {
    if (item.split('/')[1] === 'js') {
      result += `<script type="text/javascript" src="${getManifestPath()}${item}" async></script>`
    }
  })

  return result;
}

function buildHtml({ html, helmet, state }) {

  const sss = jsInclude();

  console.log(sss)

  const template = `<!DOCTYPE html>
      <html lang="ko" ${helmet.htmlAttributes.toString()}>
  
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.ico">
        ${
          helmet
            ? `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        `
            : ''
        }
        ${`<link href="${getManifestPath()}${manifest['files']['main.css']}" rel="stylesheet" />`}
      </head>
  
      <body ${helmet.bodyAttributes.toString()}>
        <div id="app">${html}</div>
        ${jsInclude()}
      </body>
  
      </html>
    `;

  return template;
}

const render = async (ctx) => {
  try {
    const { html, helmet, context, state } = await renderApp(ctx);

    console.log(html)

    const link = helmet && helmet.link.toComponent();

    if (context['status']) {
      ctx.status = context['status'];
    }
    const body = buildHtml({ html, helmet, state });
    ctx.body = body;
   
  } catch (e) {
    console.log(e);
    if (e.response && e.response.status === 404) {
      ctx.status = 404;
      ctx.redirect('/404');
    }
    ctx.body = 'error test !';
  }
};

export default render;
