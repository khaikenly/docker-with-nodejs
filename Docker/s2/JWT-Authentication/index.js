require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware/auth');

const app = express();
const port = process.env.port||3000;

app.use(express.json());

var users = [
    {
        id: "1",
        username: "Joy"
    },
    {
        id: "2",
        username: "Marrtin"
    }
]

app.get('/posts', verifyToken, (req, res)=>{
    res.json({post:"my post"});
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const user = users.find(u => u.username === username);
    if(!user) return res.sendStatus(401);

    //create jwt
    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s'
    });
    res.json({accesstoken});
});


app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
});