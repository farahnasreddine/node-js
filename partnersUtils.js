const fs = require('fs');
const { greatCircleDistance } = require("great-circle-distance");
const starbucksLat = "51.5144636"
const starbucksLng = "-0.142571"
function getPartnersWithinRange(range){
    var data = fs.readFileSync('partners.json', {encoding:'utf8'});
    
    var partnersWithinRange = [];
    const jsonData = JSON.parse(data);
    for(var i=0; i<jsonData.length; i++){
        var partnerDetails = null;
        var foundFirstOffice  =false;
        for(var x=0; x<jsonData[i].offices.length; x++){
            const coordinates = jsonData[i].offices[x].coordinates;
            const coords = {
                lat1: starbucksLat,
                lng1: starbucksLng,
                lat2: coordinates.split(',')[0],
                lng2: coordinates.split(',')[1]
            };
            var distance = greatCircleDistance(coords);
            if(distance <=range){

                if(!foundFirstOffice){
                    partnerDetails = {
                        "id": jsonData[i].id,
                        "urlName": jsonData[i].urlName,
                        "addresses": []
                    };
                    foundFirstOffice = true;
                }                        
                partnerDetails.addresses.push(jsonData[i].offices[x].address);
            }
        }
        if(foundFirstOffice)
            partnersWithinRange.push(partnerDetails);
    }
    return partnersWithinRange; 
}

module.exports = {
    getPartnersWithinRange: getPartnersWithinRange
};