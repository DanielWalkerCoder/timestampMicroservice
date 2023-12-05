function getTime(req, res, next){
    try{
        let date = req.params.date
        console.log(new Date(date))
        if(date === undefined){
            res.json({"unix": parseInt(Date.parse((new Date()).toUTCString())), "utc": (new Date()).toUTCString()})
        }else if(isUnix(date)){
            res.json({"unix": parseInt(date), "utc": (new Date(parseInt(date))).toUTCString()})
        }else if((new Date(date)).toString() === 'Invalid Date'){
            res.json({ error : "Invalid Date" })
        }else{
            date = decodeURI(date)
            res.json({"unix": Date.parse((new Date(date)).toUTCString()), "utc": (new Date(date)).toUTCString()})
        }
    }catch(error){
        res.status(500).json({message: "error", error: error.message})
    }
}

function isUnix(str){
    let isNum = true
    let digits = '0123456789'
    for(let char of str){
        if(digits.indexOf(char) === -1){
            isNum = false
        }
    }
    return isNum
}


module.exports = {
    getTime
}

