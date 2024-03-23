// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');   

// Create web server
const app = express();
app.use(bodyParser.json());