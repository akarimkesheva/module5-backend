const express=require ("express")
const path = require("path");
const cors = require("cors");
const app=express()
const router=express.Router()

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());


router.get("/songs", function(req, res) {
    const songs = [ 
        { 
            title: "We found love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["funk", "boogie"]
        }, 
        {
            title: "Happy",
            artist: "Pharrell Williams",
            popularity: 10,
            releaseDate: new Date(2013, 11, 21),
            genre: ["funk", "boogie"]
        }
    ]; 
    res.json(songs);
});
app.use("/api", router);
app.listen(3000)
