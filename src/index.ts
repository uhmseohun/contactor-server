import dotenv from 'dotenv';
import App from './app';
import config from './config';

dotenv.config();

const port: number = parseInt(config.port) || 5000;
const { app } = new App();

app
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  })
  .on('error', (error) => {
    console.error(error);
  });
