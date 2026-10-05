const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const root = __dirname;

function sendJson(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
      if (body.length > 100000) request.destroy();
    });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'POST' && request.url === '/api/contact') {
    try {
      const data = JSON.parse(await readBody(request));
      if (!data.name || !data.email || !data.message) {
        return sendJson(response, 400, { error: 'Name, email, and message are required.' });
      }
      console.log(`[contact] ${data.name} <${data.email}>: ${data.subject || 'No subject'}`);
      return sendJson(response, 200, { ok: true, message: 'Thanks, your message was received.' });
    } catch {
      return sendJson(response, 400, { error: 'Invalid request.' });
    }
  }

  if (request.method === 'GET' && (request.url === '/' || request.url === '/index.html')) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(path.join(root, 'index.html')).pipe(response);
  }

  sendJson(response, 404, { error: 'Not found' });
});

server.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
