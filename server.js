const express = require('express');
var partners = require('./partnersUtils.js')
const app = express();
var cors = require('cors')
app.use(cors())


const PORT = 3001 || process.env.port;
app.get('/partners', (req, resp) => {
    
    const range = req.query.range;
    if(range==null || range=='' || isNaN(range)){
        resp.status(400);
    }
    var respData = partners.getPartnersWithinRange(range);

    resp.json(respData.sort(function(a, b){
         if (a.urlName > b.urlName){
             return 1;
         }else{
             return -1;
         }
    }));
});

app.listen(PORT, ()=>{
    console.log('listening on port ${PORT}');
});