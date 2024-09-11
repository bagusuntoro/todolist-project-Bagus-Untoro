"use strict";
const express = require("express");
const path = require("path");
const cors = require('cors');

/**
 * dotenv
 */
require("dotenv").config();
const errorMiddleware = require("./utils/ErrorMiddleware");

const app = express();
app.use(cors());


const corsOptions = {
    origin: 'http://localhost:8080', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  };
  
  app.use(cors(corsOptions));

  
const server = require("http").createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

const index = require("./routes/index");
app.use("/", index);
app.use(errorMiddleware);

module.exports = { app, server };
