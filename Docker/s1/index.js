const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
    res.send('Hello World !!!');
});

app.get('/api',(req, res)=>{
    res.send('Hello API !!!');
});

app.get('/authenticate',(req, res)=>{
    res.send('Hello Authentication !!!');
});

app.listen(PORT, console.log(`app listening at http://localhost:${PORT}`));