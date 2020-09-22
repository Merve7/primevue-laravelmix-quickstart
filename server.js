// server.js
const express = require('express');
// create new express app and save it as "app"
const app = express();
// server configuration
const PORT = 3000;
// serve static assets
app.use(express.static('dist'));
// create a route to serve index.html
app.get('/', (req, res) => {
	res.sendFile('./index.html', { root: __dirname + '/dist/' });
});
// make the server listen to requests
app.listen(PORT, () => {
	console.log(`Server running at: http://localhost:${PORT}/`);
});
