import express from 'express';
import http from 'http';

const expressApp = express();
const server = http.createServer(expressApp);

import fibonacciRoutes from './routes/fibonacciRoutes';

const app = express();

// Routes Middleware
app.use('/api/', fibonacciRoutes);


// Start the server
expressApp.use(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.info(`Server up and running on port ${PORT}`) );
export default app;
