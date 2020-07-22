import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';

import config from './config/index';
import route from './routes/index';

import dashboard from './routes/dashboard/dashboard.route';

const app = express();
const router = express.Router();

app.use(cookieParser(config.sessionSecret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(route.allowCrosDomain);
app.use('/deloitte/api', dashboard);

app.listen(3000);

export default app;
