import dotenv from 'dotenv';
// alternative use of config
// import path from 'path';
// dotenv.config({ path: path.join(process.cwd(), '.env') });
dotenv.config()

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL
};

