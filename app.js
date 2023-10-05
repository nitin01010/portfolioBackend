const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.PORT | 3000
const cors = require("cors");

app.use(cors({
    origin: '*',
    methods: ['POST']
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/useRoutes'));

app.listen(Port, () => {
    console.log('Server is runing');
});
