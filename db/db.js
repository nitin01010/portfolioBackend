const mongoose = require("mongoose");
const url = process.env.DB_URL

const Main = async () => {
    try {
        await mongoose.connect(url);
        console.log('Database is Connected');
    } catch (error) {
        console.log('There is one error in Mongodb');
    }
}
Main();
const ContactShema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    message: String
});
const UserModel = mongoose.model('portfolioContact', ContactShema);
module.exports = UserModel;