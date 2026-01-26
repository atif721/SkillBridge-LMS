import { Logger } from "@packages/logger";
import express from "express";
import { prisma } from './lib/prisma';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    if (!process.env.SERVER_PORT) {
      throw new Error("Environment variable `SERVER_PORT` not found");
    }
    this.app.set("port", process.env.SERVER_PORT);
  }

  public routes(): void {
    this.app.get("/", (req, res) => {
      res.send("Hello world");
    });
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      Logger.info(`API is running at http://localhost:${this.app.get("port")}`);
    });
  }
}

// Test database connection
async function testDatabaseConnection() {
  try {
    // Test the connection
    await prisma.$connect();
    Logger.info("Database connected successfully!");

    // Create a test user
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    });
    Logger.log('Created user:', user);

    // Fetch all users
    const allUsers = await prisma.user.findMany();
    Logger.log('All users:', JSON.stringify(allUsers, null, 2));

  } catch (error) {
    Logger.error("Database connection failed:", error);
    process.exit(1);
  }
}

// Start the server and test database
async function bootstrap() {
  // Test database first
  await testDatabaseConnection();

  // Then start the server
  const server = new Server();
  server.start();
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  Logger.info('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  Logger.info('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

// Start everything
bootstrap().catch(async (error) => {
  Logger.error("Failed to start application:", error);
  await prisma.$disconnect();
  process.exit(1);
});