require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();



app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on port ${process.env.PORT}.`);
})
