const express = require('express');
const app = express();
const {path} = require('path');
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

app.get('/', (req, res) => {
    console.log('Hello World');
    res.json({ success: true });
}
);

app.post('/bfhl', (req, res) => {
    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
      }
    console.log('New user');
    const { data,name,email, rollNo, DOB } = req.body;
    const alphabets = [];
    const numbers = [];
    const ueser_id = `${name}_${DOB}`;
    const user_id=ueser_id.replaceAll('/', '');
    data.forEach((element) => {
        if (isCharacterALetter(element)) {
            alphabets.push(element);
        } else {
            numbers.push(element);
        }
    });
    res.json({is_success: true,user_id, email, rollNo, numbers, alphabets});
})


app.listen(process.env.PORT,(req, res, next) => {
    console.log('Server is up');
})