import path from "path";
import {makeExecutableSchema, mergeType} from "graphql-tools";
import {fileLoader, mergeTypes, mergeResolvers} from "merge-graphql-schemas";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const allTypes = fileLoader(path.join(__dirname,"/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname,"/api/**/*.js"));


const schema = makeExecutableSchema({
  typeDefs:mergeTypes(allTypes),
  resolvers:mergeResolvers(allResolvers)
});

export default schema;