//routes
const app = express();
const loanRoute = require('./routes/loanRoute');
app.use('/loan', loanRoute);