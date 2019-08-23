function timeToWalk(steps, footPrintInMeters, speedInKmPerH) {

    let distanceInM = steps * footPrintInMeters;
    let breaksTimeIntMinutes = parseInt(distanceInM / 500);
    let distanceInKm = distanceInM / 1000;

    let totalSeconds = parseInt(((distanceInKm / speedInKmPerH) * 60 * 60 + breaksTimeIntMinutes * 60).toFixed());

    let hours = parseInt(totalSeconds / 60 / 60);
    let hoursPrintFormat = hours.toString().length === 2 ? hours : "0"+ hours;

    totalSeconds -= hours * 60 * 60;

    let minutes = parseInt(totalSeconds / 60);
    let minutesPrintFormat = minutes.toString().length === 2 ? minutes : "0"+ minutes;

    totalSeconds -= minutes * 60;
    let seconds = totalSeconds % 60;
    let secondsPrintFormat = seconds.toString().length === 2 ? seconds : "0"+ seconds;

    console.log(`${hoursPrintFormat}:${minutesPrintFormat}:${secondsPrintFormat}`);
}