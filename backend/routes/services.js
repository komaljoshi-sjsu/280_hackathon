const express = require("express");
const router = express.Router();
const fs = require('fs');
router.get('/getFileData/:startDate/:endDate/:type/:country', (req,res)=> {
    const {parse} = require('csv-parse');
    let startDate = parseInt(req.params.startDate);
    let endDate = parseInt(req.params.endDate);
    let type = req.params.type;
    let country = req.params.country;
    console.log(req.params);
    let result = [];
    let headerType = 'GDP growth (annual %) '+country;
    let parser = parse({columns: true}, async (err, records) => {
        //console.log(Object.keys(records[0]))
        result = await records.filter(rec=> {
            let yearInCsv = rec[Object.keys(rec)[0]];//get year in csv
            yearInCsv = parseInt(yearInCsv);
            // let syear = parseInt(rec['Year']);
            
            if(yearInCsv>=startDate && yearInCsv<=endDate) {
                //console.log('hell yeah');
                return true;
            } else
                return false;
        })
        result = await result.map(rec=> {
            let yearInCsv = rec[Object.keys(rec)[0]];//get year in csv
            //console.log(yearInCsv)
            yearInCsv = parseInt(yearInCsv);
            let rest = {
                Year: yearInCsv,
                val: rec[headerType]
            }
            return rest;
        })
        console.log(result);
    });
    
    fs.createReadStream(__dirname+'/../csv/gdp_growth_rate.csv').pipe(parser);

}) 
module.exports = router;