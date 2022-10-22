const express = require('expess');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = express.env.port || 3001;
const app = express();

app.use(express.urlendcoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API Server is running on ${PORT}!`)
    });
});