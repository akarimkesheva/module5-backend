const express=require ("express")
var cors = require("cors");
const path = require("path");

const bodyParser=require('body-parser')
const Song=require("./models/songs")
const app=express()
app.use(cors());

app.use(bodyParser.json())
const router=express.Router()


router.get("/songs", async(req, res)=> {
    try{
        const songs=await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }
    })

router.get("/songs/:id", async (req,res) =>{
    try{
       const song= await Song. findById(req.params.id)
       res.json(song)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post("/songs",async(req, res)=>{
    try{
        const song=await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
        res.sendStatus(204)
    }
    catch (err){
        res.status(400).send(err)
    }
       
})
router.put("/songs/:id", async (req, res) => { 
    try {
        const song = req.body;
       
        const updatedSong = await Song.updateOne({ _id: req.params.id }, song);
        console.log(song);
        res.status(200).send(updatedSong); 
    } catch (err) {
        res.status(400).send(err);
    }
})

app.use("/api", router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});