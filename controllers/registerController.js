const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.'});
    //check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user}).exec(); //needs exec because we could have a callback, but we don't so we need exec because we are doing async/await

    if (duplicate) return res.sendStatus(409); //send conflict

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //create and store new user
        const result = await User.create({
            "username": user,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({'success':`New use ${user} created.`});
    } catch (err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = { handleNewUser };