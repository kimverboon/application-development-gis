// Assignment 1
console.log("Hi, user!");


const latitudes = [52.37, 50.82, 48.85, 41.89, 48.21, 51.51, 40.42, 52.52, 37.98, 55.68];
const longitudes = [4.89, 4.35, 2.35, 12.51, 16.37, -0.13, -3.70, 13.41, 23.72, 12.57];

// Amsterdam, Brussels, Paris, Rome, Vienna, London, Madrid, Berlin, Athens, Copenhagen

// test case include lat/long that are not the right data type
const test_lat = [52.37, 50.82, 48.85, 95, "123"]
const test_long = [4.89, 4.35, 2.35, -5, -500]


function num_check(x) {
    if (Number.isFinite(x)) {
        return x
    } else {
        console.log(x + " is not a numeric value!");
    }
}

function isValidCoordinate(lat, lon) {
    // check if lat and lon are indeed numbers by calling the above function
    num_check(lat);
    num_check(lon);

    // condition: lat must be within -90 to 90 range
    let isLatitude = lat >= -90 && lat <= 90;
    // condition: long must be within -180 and 180
    let isLongitude = lon >= -180 && lon <= 180;

    if (isLatitude && isLongitude) {
        return isLatitude && isLongitude;
    } else {
        if (!isLatitude) {
            console.log("Your input of " + lat + " for the longitude is outside of the range!");
        }
        if (!isLongitude) {
            console.log("Your input of " + lon + " for the latitude is outside of the range!");
        }
    }
}


function decimalToDMS(value) {
    // converts decimal degrees to degrees, Degrees Decimal Minutes (DDM)
    // & converts minutes and seconds according to PGC Coordinate Converter

    let degrees = Math.floor(value); // after the comma value

    let minutesDecimal = (value - degrees) * 60; // everything after comma multiplied by 60
    let minutes = Math.floor(minutesDecimal);

    let seconds = (minutesDecimal - minutes) * 60; // last remainder again multiplying by 60
    seconds = Math.round(seconds);


    let result = degrees + "° " + minutes + "' " + seconds + "\""; // put in right format
    return result
};

function countValidCoordinates(latitudes, longitudes) {
    // counts number of valid coordinates in the list, use isValidCoordinate func
    let count = 0

    for (let i = 0; i < latitudes.length; i++) {
        if (isValidCoordinate(latitudes[i], longitudes[i]))
            count = count + 1;
    }


    // use loops and isValidCoord func to print valid coordinates in decimal and DMS forms


    for (let i = 0; i < latitudes.length; i++) {
        if (isValidCoordinate(latitudes[i], longitudes[i])) {
            console.log("Yay! (" + latitudes[i] + ", " + longitudes[i] + ")" + " is a valid coordinate pair");

            let converted_lat = decimalToDMS(latitudes[i]);
            let converted_long = decimalToDMS(longitudes[i]);

            console.log("The coordinates in DMS are: " + converted_lat + " (latitude), " + converted_long + " (longitude)");
        } else {
            console.log("uhhh...(" + latitudes[i] + ", " + longitudes[i] + ")" + " is not a valid coordinate pair...");
        }
    }
    return count;
}

let total = countValidCoordinates(latitudes, longitudes);
console.log("The total amount of valid coordinates: " + total);

// also test out with lat/long that are not the right data type
