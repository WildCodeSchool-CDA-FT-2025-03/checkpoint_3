import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import { db } from "./db";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import schemaPromise from "./schema";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = process.env.SERVER_PORT || 4000;

const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "http://localhost:4173", // Vite preview
  "http://localhost:3000", // Create React App
];

schemaPromise.then(async (schema) => {
  await db.initialize();
  const app = express();
  const httpServer = http.createServer(app);
  const plugins = [ApolloServerPluginDrainHttpServer({ httpServer })];
  const server = new ApolloServer({ schema, plugins });
  await server.start();
  console.log(allowedOrigins);
  const corsConfig = { origin: allowedOrigins, credentials: true };
  app.use(cors<cors.CorsRequest>(corsConfig));
  const context = async ({ req, res }: any) => ({ req, res });
  const expressMW = expressMiddleware(server, { context });
  app.use(express.json(), expressMW);
  const { url } = await startStandaloneServer(server, {
    listen: { port },
    cors: {
      origin: allowedOrigins,
      credentials: true,
    },
  });
  console.info(`
🚀 Server is running!
📭 GraphQL endpoint: ${url}
🔒 CORS enabled for: ${allowedOrigins.join(", ")}
`);
});
