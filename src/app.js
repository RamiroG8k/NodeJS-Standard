// Common 
import express from 'express';
import morgan from 'morgan';
import pkg from  '../package.json';
// Routes
import productRoutes from './routes/products.routes';

const app = express();

// Get info from package.json
app.set('pkg', pkg);


// Developer middleware
app.use(morgan('dev'));
// Handles data as JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    });
});

app.use('/products', productRoutes);

export default app;