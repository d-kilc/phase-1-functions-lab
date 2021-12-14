// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(destination - start)) * 264;
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if ( feet > 2500 ) {
        return 'cannot travel that far';
    } else if ( feet >  2000 ) {
        return 25;
    } else if ( feet > 400 ) {
        return 0.02 * ( feet - 400 );
    } else {
        return 0;
    }
}
