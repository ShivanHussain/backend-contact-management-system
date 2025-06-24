import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import errorMiddleware from './middlewares/error.js';

dotenv.config();

// Connect to the database first
connectDB();

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/contacts', contactRoutes);

// Error Handler (Always after routes)
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
