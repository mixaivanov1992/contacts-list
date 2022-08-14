/* eslint-disable */
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const users = require(path.join(__dirname, 'db.json')).users;
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/login', login);

server.listen(3000, () => {
    console.log('JSON Server is running')
});

function login(request, response){
    const {username, password} = request.body;
    if (isAuthorized(username, password)) {
        return response.json({auth: true});
    }
    return response.json({auth: false});
}

function isAuthorized(username, password){
    return users.filter((user) => (user.username === username && user.password === password)).length;
}