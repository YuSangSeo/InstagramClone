// require("dotenv").config();

import "./passport";
import "./env";

import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import {sendSecretMail} from "./utils";
import passport from "passport";
import {authenticateJwt} from "./passport";

// sendSecretMail("vlvksbdof12@gmail.com","123");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({schema, context:{prisma}});

server.express.use(logger("dev"));
// server.express.use(passport.authenticate("jwt"));

// server.express.use(authenticateJwt);


server.start({port:PORT}, ()=>
  console.log(`Server running on http://localhost:${PORT}`)
);