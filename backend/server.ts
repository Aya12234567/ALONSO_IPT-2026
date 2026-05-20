import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorHandler from './_middleware/error-handler';
import accountsController from './accounts/accounts.controller';
import swaggerDocs from './_helpers/swagger';

const app = express();

app.set('trust proxy', true);  // ← the only addition

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'https://ipt-2026-frontend-ktmy.onrender.com',
    credentials: true
}));
app.use('/accounts', accountsController);
app.use('/api-docs', swaggerDocs);
app.get('/', (req: Request, res: Response) => {
    res.redirect('/api-docs');
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});
const port = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
