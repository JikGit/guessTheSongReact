import express from 'express'; 


const app = express();

app.get("/api", (req, res) => {
    res.json({"prova": "1"});
})

app.listen(5000, () => { console.log("Server started on port 5000") });
