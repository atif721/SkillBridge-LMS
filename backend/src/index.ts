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

// Test database connection (lightweight)
async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    Logger.info("Database connected successfully!");
  } catch (error) {
    Logger.error("Database connection failed:", error);
    process.exit(1);
  }
}

async function bootstrap() {
  await testDatabaseConnection();

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

bootstrap().catch(async (error) => {
  Logger.error("Failed to start application:", error);
  await prisma.$disconnect();
  process.exit(1);
});
