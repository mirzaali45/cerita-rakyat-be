import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { env } from './config/env';
import routes from './routes';
import { notFoundHandler, errorHandler } from './middlewares/error.middleware';

const app: Application = express();

// Security middleware
app.use(helmet());

// CORS - Fixed configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://kisah-nusa.vercel.app',
  'https://kisah-nusa-client.vercel.app/',
  env.CORS_ORIGIN
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Untuk development, allow semua. Ganti false untuk strict mode
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: {
    success: false,
    message: 'Terlalu banyak request, coba lagi nanti',
  },
});
app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging (development only)
if (env.isDevelopment) {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Routes
app.use('/api', routes);

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Cerita Rakyat API',
    version: '1.0.0',
    docs: '/api/health',
  });
});

// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;