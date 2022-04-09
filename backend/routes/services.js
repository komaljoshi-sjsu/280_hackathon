const express = require("express");
const router = express.Router();
const fs = require('fs');
const {parse} = require('csv-parse');
router.get('/getFileData/:startDate/:endDate/:type/:country', (req,res)=> {
    let startDate = parseInt(req.params.startDate);
    let endDate = parseInt(req.params.endDate);
    let type = req.params.type;
    let country = req.params.country;
    console.log(req.params);
    let result = [];
    let parser = parse({columns: true}, function (err, records) {
        result = records.filter(rec=> {
            let syear = parseInt(rec['Year']);
            console.log(rec.Year)
            if(parseInt(syear)>=startDate && parseInt(syear)<=endDate) {
                console.log('hell yeah');
                return true;
            } else
                return false;
        })
        console.log(result);
    });
    
    fs.createReadStream(__dirname+'/../csv/gdp_growth_rate.csv').pipe(parser);

}) 
module.exports = router;