const rp = require("request-promise");

function getListCivilization(){
    var listCiv ={
        uri: "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations",
        json:true
    }
    return rp(listCiv);
}


function getCivilization(civilization){
    var civ ={
        uri: "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + civilization,
        json:true
    }
    return rp(civ);
}

module.exports = {
    getListCivilization,
    getCivilization
}