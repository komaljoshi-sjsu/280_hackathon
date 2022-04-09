const express = require("express");
const router = express.Router();
const fs = require('fs');
router.get('/agri/getFileData/:startDate/:endDate/:type/:country', (req,res)=> {
    const {parse} = require('csv-parse');
    let startDate = parseInt(req.params.startDate);
    let endDate = parseInt(req.params.endDate);
    let type = req.params.type;
    let country = req.params.country;
    console.log(req.params);
    let result = [];
    let parser = parse({columns: true}, async (err, records) => {
        let headers = Object.keys(records[0]);
        let countryName = '';
        headers.map(hd=> {
            if(hd.includes('Country Name')) {
                countryName = hd;
            }
        })
        result = await records.filter(rec=> {
            return rec[countryName] == country;
            
        })
        //console.log(result);
        //filter according to date
        let keys = [];
        let recs = [];
        await result.map(rec=> {
            let yearInCsv = rec[Object.keys(rec)[0]];//get year in csv
            if(keys.length==0) {
                keys = Object.keys(rec);
            }
            for(let i=0;i<keys.length;i++) {
                let year = keys[i]; //null if key is not 'year'
                if(year!=null && year>=startDate && year<=endDate) {
                    let rest = {
                        Year: year,
                        val: rec[year]
                    }
                    recs.push(rest);
                }
            }
        })
        console.log(recs);
    });
    
    fs.createReadStream(__dirname+'/../csv/agri/'+type+'.csv').pipe(parser);

}) 
module.exports = router;