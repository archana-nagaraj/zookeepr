const express = require('express');

const app = express();  // instantiate the server

app.listen(3001, () => {
    console.log('API server now listening on port 3001!');
})