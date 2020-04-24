const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

const port = 3100;
const jwtToken = `AJWTToken`;

const isAuthorized = (req) => {
  return true;
  // let bearer = req.get('Authorization');
  // if (bearer === 'Bearer ' + jwtToken) {
  //   return true;
  // }
  // return false;
}

server.use(middlewares);
server.use(bodyParser.json());

server.post('/sign-in', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'demo' && password === 'demo') {
    res.json({
      name: 'demo',
      token: jwtToken
    });
  }
  res.send(422, 'Invalid username and password');
});

server.use((req, res, next) => {
  if (isAuthorized(req)) next();
  else {
    res.sendStatus(401);
  }
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});