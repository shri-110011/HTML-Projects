const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use("/", express.static(path.join(__dirname)));

app.get('/', (req, res)=>{
    console.log("Inside /");
    res.sendFile(path.join(__dirname, "index.html"));
});


//Code to create the local server
app.listen(app.get("port"), ()=>{ 
    if(process.env.PORT) {
        console.log(process.env.PORT);
    }
    console.log("Express server running on port "+app.get('port'));
});