import 'dotenv/config'; // ← ADD THIS AS LINE 1
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorHandler from './_middleware/error-handler';
import accountsController from './accounts/accounts.controller';
import swaggerDocs from './_helpers/swagger';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// CORS — specific origin required for credentials/cookies to work
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    credentials: true
}));

// api routes
app.use('/accounts', accountsController);

// swagger docs route
app.use('/api-docs', swaggerDocs);

// global error handler — must have 4 params for Express to recognize it
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});

// start server
const port = Number(process.env.PORT) || 4000;

app.listen(port, () => console.log('Server listening on port ' + port));