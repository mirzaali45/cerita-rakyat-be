import app from './app';
import { env, validateEnv } from './config/env';
import { connectDatabase, disconnectDatabase } from './config/database';

// Validate environment variables
validateEnv();

async function bootstrap(): Promise<void> {
  try {
    // Connect to database
    await connectDatabase();

    // Start server
    app.listen(env.PORT, () => {
      console.log('═══════════════════════════════════════════');
      console.log('🚀 Cerita Rakyat API Server');
      console.log('═══════════════════════════════════════════');
      console.log(`📡 Server:      http://localhost:${env.PORT}`);
      console.log(`📡 API Base:    http://localhost:${env.PORT}/api`);
      console.log(`📡 Health:      http://localhost:${env.PORT}/api/health`);
      console.log(`🌍 Environment: ${env.NODE_ENV}`);
      console.log('═══════════════════════════════════════════');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown handlers
process.on('SIGTERM', async () => {
  console.log('\n📤 SIGTERM received, shutting down gracefully...');
  await disconnectDatabase();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('\n📤 SIGINT received, shutting down gracefully...');
  await disconnectDatabase();
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', reason);
  process.exit(1);
});

// Start the server
bootstrap();
