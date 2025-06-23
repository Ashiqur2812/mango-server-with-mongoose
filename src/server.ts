import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to mango server app');
});

app.listen(config.port, () => {
    console.log('Server is running');
});

async function server() {
    try {
        await mongoose.connect(config.database_url!);
        console.log(`Mango server is running on port ${config.port}`);
    }
    catch (error) {
        console.error(`server error ${server}`);
    }
}

server();