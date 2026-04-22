const mongoose = require('mongoose');


const uri = "mongodb+srv://akarimkesheva_db_user:vyrbyt-3werfi-wuskYf@cluster0.i2tmdgm.mongodb.net/songsDB?appName=Cluster0";

mongoose.connect(uri)
    .then(() => console.log('--- DB CONNECTED SUCCESSFULLY ---'))
    .catch((err) => console.error('--- DB CONNECTION FAILED ---', err));

module.exports = mongoose;