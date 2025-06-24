import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import routes from './modules/routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        success: true,
        message: 'Welcome to mango server app',
        data: {}
    });
});

async function server() {
    try {
        await mongoose.connect(config.database_url!);
        console.log('Connected to MongoDB using mongoose');
        app.listen(config.port, () => {
            console.log(`Mango server is running on port ${config.port}`);
        });

    }
    catch (error) {
        console.error(`server error ${server}`);
    }
}

server();
