import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './app-router';
import * as dotenv from 'dotenv';

const PORT = 3600

dotenv.config({
    path: '../../.env',
});

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});


const app = express();
app.use(cors());

app.use('/', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
}));

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});