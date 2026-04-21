const express=require ("express")
var cors = require("cors");
const path = require("path");
const app=express()
app.use(cors());
const router=express.Router()


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
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});